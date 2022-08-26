<template>

    <div class="button-cont flex">
        <button class="button misc-button" @click="$router.go(-1)">Return back</button>
        <button class="button primary-button" id="save-button" @click="saveChanges" v-if="!viewOnly">Save changes</button>
    </div>

    <div class="modal flex column">
        <div class="name-section flex">
             <div class="input-field flex column">
                <label for="firstname">Firstname: </label>
                <input type="text" name="firstname" :disabled="viewOnly" v-model="employee.firstName" required/>
            </div>
            <div class="input-field flex column">
                <label for="lastname">Lastname: </label>
                <input type="text" name="lastname" :disabled="viewOnly" v-model="employee.lastName" required/>
            </div>
        </div>
        <div class="name-section">
            <div class="input-field flex column">
                <label for="adress">Address: </label>
                <input type="text" name="address" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field flex column">
                <label for="dateofbirth">Date of birth: </label>
                <input type="text" name="dateofbirth" :disabled="viewOnly"/>
            </div>
            <div class="input-field flex column">
                <label for="workingsince">Working since: </label>
                <input type="text" name="workingsince" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field flex column">
                <label for="position">Position: </label>
                <input type="text" name="position" :disabled="viewOnly"/>
            </div>
            <div class="input-field flex column">
                <label for="salary">Salary: </label>
                <input type="text" name="salary" :disabled="viewOnly"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    import { Employee } from '../models/TypesCollection';

    const route = useRoute();
    const store = useStore();

    let employeeId: number, employee: Employee;

    const isPast: boolean = route.params.action === 'past';

    const viewOnly = computed(() => isPast || route.params.action === 'current');
    const text = 'Required inputs were left empty.';

    if(route.params.id !== 'new'){
        employeeId = Number(route.params.id);
        employee = reactive(JSON.parse(JSON.stringify(store.getters.getSpecificEmployee(employeeId, isPast))));
    }
    else {
        employeeId = -1;
        employee = reactive({
            id: 0,
            firstName: '',
            lastName: '',
            past: false
        });
    }

    const saveChanges = (): void => {
        if(route.params.id === 'new'){
            validateData() ? store.dispatch('POST_EMP_DATA', employee) : store.commit('TOGGLE_CONFIRM_DIALOG', text);
        }
        else {
            validateData() ? store.dispatch('EDIT_CURRENT_EMP', employee) : store.commit('TOGGLE_CONFIRM_DIALOG', text);
        }
    }

    const validateData = (): boolean => {
        employee.firstName = employee.firstName.trim();
        employee.lastName = employee.lastName.trim();

        return employee.firstName !== '' && employee.lastName !== '';
    }
</script>

<style scoped lang="scss">

.modal {
    padding: 20px;
    min-width: 800px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
}
.name-section {
    padding-bottom: 10px;

    .input-field {
        flex: 1;
        margin: 10px;

        .disable {
            pointer-events: none;
        }

        label {
            align-self: flex-start;
            margin-bottom: 5px;
            color: rgb(255, 255, 255);
            font-weight: bold;
        }

        input[type="text"] {
            font-family: 'Ubuntu', sans-serif;
            padding: 6px;
            border-style: none;
            background-color: rgb(255, 255, 255);
            border-radius: 7px;

            &:focus {
                outline: none;
            }
        }
    }
}

.button-cont {
    margin-bottom: 20px;
    justify-content: space-evenly;
}
    
</style>