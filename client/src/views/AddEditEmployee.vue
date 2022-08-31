<template>
    <div class="button-cont flex">
        <button class="button misc-button" @click="$router.go(-1)">Return back</button>
        <button class="button primary-button" id="save-button" @click="saveChanges" v-if="!viewOnly">Save changes</button>
    </div>
    <div class="modal flex column">
        <div class="name-section flex">
            <InputComp name="Firstname" :viewOnly="viewOnly" v-model="employee.firstName"/>
            <InputComp name="Lastname" :viewOnly="viewOnly" v-model="employee.lastName"/>
        </div>
        <div class="name-section">
            <InputComp name="Address (optional)" :viewOnly="viewOnly" v-model="employee.address"/>
        </div>
        <div class="name-section flex">
             <div class="input-field flex column">
                <label for="dateofbirth">Date of birth: </label>
                <div class="flex">
                    <input type="text" name="dateofbirth" class="date-show" disabled="true" v-model="bDate"/>
                    <input type="date" :disabled="viewOnly" class="date-pick" v-model="birthDate"/>
                </div>
            </div>
            <div class="input-field flex column">
                <label for="workingsince">Working since: </label>
                <div class="flex">
                    <input type="text" name="workingsince" class="date-show" disabled="true" v-model="wDate">
                    <input type="date" :disabled="viewOnly" class="date-pick" v-model="workDate"/>
                </div>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field flex column" @click="toggle">
                <label for="position">Position: </label>
                <input type="text" name="position" :class="!viewOnly && 'pointer'" :disabled="true" v-model="pos"/>
                <div class="pos-options" v-show="dropdown && !viewOnly">
                    <div class="pos" v-for="pos in positions" :key="pos.positionId" @click="retrieve(pos.positionId, pos.title)">{{pos.title}}</div>
                </div>
            </div>
            <InputComp name="Salary" :viewOnly="viewOnly" v-model="employee.salary"/>
        </div>
    </div>
    <div class="table-content flex" id="prev-pos-table" v-if="isEdit">
        <TableComp>
             <template v-slot:table-header>
                <th>Previous position</th>
                <th>Start date</th>
                <th>End date</th>          
            </template>
            <template v-slot:table-body>
                <PositionEntry v-for="entry in employee.posEntries" :position="entry.title"
                    :beginDate="dateModifier(new Date(entry.beginDate).toISOString())" :endDate="dateModifier(entry.endDate)"/>
            </template>
        </TableComp>
    </div>
</template>

<script setup lang="ts">
    import { reactive, computed, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    import { Employee, PosEntry } from '../utility/TypesCollection';
    import { dateModifier, compareDates } from '../utility/Miscellaneous';
    import InputComp from '../components/InputComp.vue';
    import PositionEntry from '../components/PositionEntry.vue';
    import TableComp from '../components/TableComp.vue';

    const route = useRoute();
    const store = useStore();

    let employeeId: number, employee: Employee, dropdown = ref(false), birthDate = ref(''), workDate = ref('');

    const isPast: boolean = route.params.action === 'past';
    const isNew: boolean = route.params.id === 'new';
    const isEdit = ref(route.params.action === 'edit');

    const viewOnly = computed(() => isPast || route.params.action === 'current');
    const positions = computed(() => store.state.PositionManager.positionData);

    if(positions.value.length === 0){
        store.dispatch('GET_POS_DATA');
    }

    if(!isNew){
        employeeId = Number(route.params.id);
        employee = reactive(JSON.parse(JSON.stringify(store.getters.getSpecificEmployee(employeeId, isPast))));
        employee.dateOfBirth = new Date(employee.dateOfBirth);
        employee.workingSince = new Date(employee.workingSince);
    }
    else {
        employeeId = -1;
        employee = reactive({
            id: 0,
            firstName: '',
            lastName: '',
            dateOfBirth: new Date(),
            workingSince: new Date(),
            address: '',
            posEntries: [],
            salary: 0,
            past: false
        });
    }

    const posEntry: PosEntry = reactive({
        posEntryId: 0,
        positionId: 0,
        title: '',
        employeeId: 0,
        beginDate: new Date(),
        endDate: null
    });

    const text = 'Some inputs were not filled out correctly.';
    const lastPos = employee.posEntries.slice(-1)[0];

    const pos = computed(() => isNew && posEntry.positionId === 0 ? '' : (isNew ? posEntry.title : (posEntry.positionId === 0 ? lastPos.title : posEntry.title)));
    const bDate = computed(() =>  dateModifier(employee.dateOfBirth.toISOString()));
    const wDate = computed(() => dateModifier(employee.workingSince.toISOString()));  

    watch(birthDate, newValue => employee.dateOfBirth = new Date(new Date(newValue).setHours(12, 0, 0, 0)));
    watch(workDate, newValue => employee.workingSince = new Date(new Date(newValue).setHours(12, 0, 0, 0)));

    const saveChanges = (): void => {
        if(validateData()) {
            if(employee.posEntries.length > 0){
                employee.posEntries[employee.posEntries.length - 1].endDate = posEntry.beginDate;
            }
            employee.posEntries.push(posEntry);
            store.dispatch(route.params.id === 'new' ? 'POST_EMP_DATA' : 'EDIT_CURRENT_EMP', employee);
        }
        else {
            store.commit('TOGGLE_CONFIRM_DIALOG', text);
        } 
    }

    const validateData = (): boolean => {
        console.log(employee.dateOfBirth + ' - ' + employee.dateOfBirth.toISOString());
        employee.firstName = employee.firstName.trim();
        employee.lastName = employee.lastName.trim();
        employee.address = employee.address?.trim();
        posEntry.beginDate = new Date(employee.workingSince);

        const bComp = compareDates(employee.dateOfBirth);
        const wComp = compareDates(employee.workingSince);

        return employee.firstName !== '' && employee.lastName !== '' && employee.salary > 0 && posEntry.positionId !== 0 && 
        posEntry.title !== '' && (!bComp && bComp !== null) && (wComp || wComp === null);
    }

    const toggle = (): boolean => dropdown.value = !dropdown.value;

    const retrieve = (posId: number, title: string): void => {
        posEntry.positionId = posId;
        posEntry.title = title;
    }
</script>

<style scoped lang="scss">
    .modal {
        padding: 20px;
        min-width: 800px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;

        .name-section {
            input[type="date"]::-webkit-inner-spin-button,
            input[type="date"]::-webkit-calendar-picker-indicator {
                cursor: pointer;
                width: 50px;
            }
        }
    }

    .pos-options {
        position: absolute;
        min-width: 100%;
        z-index: 100;
        top: 60px;
        background-color: rgb(255, 255, 255);
        border-radius: 7px;
        max-height: 160px;
        overflow-y: auto;
        scrollbar-width: none;

        &::-webkit-scrollbar {
        width: 0;
        height: 0;
        }

        .pos {
            padding: 2px 0;
            text-align: left;
            cursor: pointer;
            padding: 5px;
            border-radius: 7px;

            &:hover {
                background-color: rgb(236, 235, 235);
            }
        }
    }

    .date-pick {
        flex: 1;
        margin-left: 7px;
        max-width: 29px;
    }

    .date-show {
        flex: 10;
    }

    #prev-pos-table {
        max-height: 180px;
    }
</style>