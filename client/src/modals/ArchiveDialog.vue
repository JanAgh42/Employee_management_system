<template>
<div class="modal-background">
    <div class="dialog flex column">
        <h4>{{text}}</h4>
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
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { Employee } from '../utility/TypesCollection';

    const store = useStore();

    const employeeId: number = store.state.EmployeeManager.entryInfo.retrievedEmployeeId;
    const isPastEmployee: boolean = store.state.EmployeeManager.entryInfo.isPastEmployee;
    const isPosition: boolean = store.state.EmployeeManager.entryInfo.isPosition;
    
    const text = computed(() => store.state.DialogManager.archiveDialogText);

    const loadInitialState = (): void => {
        store.commit('CLEAR_USER_ID');
        store.commit('TOGGLE_ARCHIVE_DIALOG');
    }

    const archiveEmp = (): void => {
        const employee: Employee = JSON.parse(JSON.stringify(store.getters.getSpecificEmployee(employeeId, false)));
        employee.past = true;
        employee.posEntries[employee.posEntries.length - 1].endDate = new Date();
        store.dispatch('EDIT_CURRENT_EMP', employee);
        
        if(store.state.PastEmpManager.pastData.length !== 0){
            setTimeout((): void => { store.dispatch('GET_PAST_EMP_DATA') }, 30);
        }
        loadInitialState();
    }

    const deleteEmp = (): void => {
        store.dispatch(isPosition ? 'DELETE_POS' : (isPastEmployee ? 'DELETE_PAST_EMP' : 'DELETE_CURRENT_EMP'), employeeId);
        loadInitialState();
    }
</script>

<style scoped lang="scss">
    .modal-background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.3);
    }
</style>