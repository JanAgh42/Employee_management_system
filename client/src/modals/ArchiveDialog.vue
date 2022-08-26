<template>
<div class="modal-background">
    <div class="dialog flex column">
        <h4>
            <slot></slot>
        </h4>
        <div class="dialog-buttons flex">
            <div class="d-button" v-if="!isPastEmployee">
                <button class="button primary-button" @click="archiveEmp">Archive</button>
            </div>
            <div class="d-button">
                <button class="button delete-button" @click="deleteEmp">Delete</button>
            </div>
            <div class="d-button">
                <button class="button misc-button" @click="loadInitialState">Cancel</button>
            </div>
        </div>    
    </div>
</div>
</template>

<script setup lang="ts">
    import { useStore } from 'vuex';
    import { Employee } from '../models/TypesCollection';

    const store = useStore();

    const employeeId: number = store.state.EmployeeManager.employeeInfo.retrievedEmployeeId;
    const isPastEmployee: boolean = store.state.EmployeeManager.employeeInfo.isPastEmployee;

    const loadInitialState = (): void => {
        store.commit('CLEAR_USER_ID');
        store.commit('TOGGLE_ARCHIVE_DIALOG');
    }

    const archiveEmp = (): void => {
        const employee: Employee = JSON.parse(JSON.stringify(store.getters.getSpecificEmployee(employeeId, false)));
        employee.past = true;
        store.dispatch('EDIT_CURRENT_EMP', employee);

        if(store.state.PastEmpManager.pastData.length !== 0){
            store.dispatch('GET_PAST_EMP_DATA');
        }
        loadInitialState();
    }

    const deleteEmp = (): void => {
        store.dispatch(isPastEmployee ? 'DELETE_PAST_EMP' : 'DELETE_CURRENT_EMP', employeeId);
        loadInitialState();
    }
</script>
<style scoped lang="scss">
    
</style>