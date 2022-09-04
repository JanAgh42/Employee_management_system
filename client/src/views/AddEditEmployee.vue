<template>
    <div class="button-cont flex">
        <button class="button misc-button" @click="$router.go(-1)">Return back</button>
        <button class="button primary-button" id="save-button" @click="saveChanges" v-if="!viewOnly">Save changes</button>
    </div>
    <div class="modal flex column">
        <div class="flex">
            <InputComp name="Firstname" :viewOnly="viewOnly" v-model="employee.firstName"/>
            <InputComp name="Lastname" :viewOnly="viewOnly" v-model="employee.lastName"/>
        </div>
        <div>
            <InputComp name="Address (optional)" :viewOnly="viewOnly" v-model="employee.address"/>
        </div>
        <div class="flex">
            <DateInputComp name="Date of birth" :date="employee.dateOfBirth" :viewOnly="viewOnly" v-model="birthDate"/>
            <DateInputComp name="Working since" :date="employee.workingSince" :viewOnly="viewOnly" v-model="workDate"/>
        </div>
        <div class="flex">
             <div class="input-field flex column" @click="toggle">
                <label for="position">Position: </label>
                <input type="text" name="position" :class="!viewOnly && 'pointer'" :disabled="true" v-model="pos"/>
                <div class="pos-options" v-show="dropdown && !viewOnly">
                    <div class="pos" v-for="pos in positions" :key="pos.positionId" @click="retrieve(pos.positionId, pos.title)">{{pos.title}}</div>
                </div>
            </div>
            <InputComp name="Salary (€)" :viewOnly="viewOnly" v-model="employee.salary"/>
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
                <PositionEntry v-for="entry in employee.posEntries" :key="entry.posEntryId" :position="entry.title"
                    :beginDate="dateModifier(new Date(entry.beginDate).toISOString())" :endDate="dateModifier(entry.endDate)"/>
            </template>
        </TableComp>
    </div>
</template>

<script setup lang="ts">
    import { reactive, computed, ref, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { Employee, PosEntry } from '../utility/TypesCollection';
    import { dateModifier, compareDates } from '../utility/Miscellaneous';
    import { incorrectInputs } from '../utility/Constants';
    import PositionEntry from '../components/PositionEntry.vue';
    import DateInputComp from '../components/DateInputComp.vue';
    import InputComp from '../components/InputComp.vue';
    import TableComp from '../components/TableComp.vue';

    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    let employeeId: number, employee: Employee, dropdown = ref(false), birthDate = ref(''), workDate = ref('');

    const isPast: boolean = route.params.action === 'past';
    const isNew: boolean = route.params.id === 'new';
    const isEdit: boolean = route.params.action === 'edit';

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

    const helperDate: Date = employee.workingSince;
    const lastPos = employee.posEntries.slice(-1)[0];

    const pos = computed(() => isNew && posEntry.positionId === 0 ? '' : (isNew ? posEntry.title : (posEntry.positionId === 0 ? lastPos.title : posEntry.title)));  

    watch(birthDate, newValue => employee.dateOfBirth = new Date(new Date(newValue).setHours(12, 0, 0, 0)));
    watch(workDate, newValue => employee.workingSince = new Date(new Date(newValue).setHours(12, 0, 0, 0)));

    const saveChanges = (): void => {
        if(!validateData()) {
            store.commit('TOGGLE_CONFIRM_DIALOG', incorrectInputs);
            return;
        }
        if(!isEdit || posEntry.positionId !== 0){
            if(employee.posEntries.length > 0){
                employee.posEntries[employee.posEntries.length - 1].endDate = posEntry.beginDate;
            }
            employee.posEntries.push(posEntry);
        }
        store.dispatch(route.params.id === 'new' ? 'POST_EMP_DATA' : 'EDIT_CURRENT_EMP', employee);
        router.back();
    }

    const validateData = (): boolean => {
        employee.firstName = employee.firstName.trim();
        employee.lastName = employee.lastName.trim();
        employee.address = employee.address?.trim();
        posEntry.beginDate = new Date(employee.workingSince);

        const bComp = compareDates(employee.dateOfBirth, new Date());
        const wComp = compareDates(employee.workingSince, helperDate);

        const primaryCheck = employee.firstName !== '' && employee.lastName !== '' && employee.salary > 0 && !bComp && bComp !== null && (wComp || wComp === null);

        return primaryCheck && (isNew ? posEntry.positionId !== 0 : true) && (isEdit ? wComp === null || (posEntry.positionId !== 0 && posEntry.positionId !== lastPos.positionId) : true);
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

    #prev-pos-table {
        max-height: 180px;
    }
</style>