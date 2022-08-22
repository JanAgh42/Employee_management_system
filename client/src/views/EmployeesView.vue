<template>
    <div class="btn-cont flex">
        <router-link to="/employee/add/new">
            <button class="button primary-button" id="new-empl-button">Add new Employee</button>
        </router-link>
    </div>
    <div class="table-content flex">
        <TableComp>
            <template v-slot:table-header>
                <th>Name</th>
                <th>Actual position</th>
                <th>Edit user</th>
                <th>Delete user</th>          
            </template>
            <template v-slot:table-body>
                <EmployeeEntry v-for="entry in data" :key="entry.id" :fName="entry.firstName" :lName="entry.lastName" :position="entry.position" :id="entry.id" @modal="initModal"/>
            </template>
        </TableComp>
    </div>
    <teleport to='#modal-container'>
        <ArchiveDialog v-if="modalVisible" :deleteOnly="false" @hide="toggleModal(), eraseId()" @delete="deleteUser" @archive="archiveUser">
            Would you like to archive this employee?
        </ArchiveDialog>
    </teleport>
</template>
<script setup lang="ts">
    import { useStore } from 'vuex';
    import { ref, computed } from 'vue';
    import EmployeeEntry from '../components/EmployeeEntry.vue';
    import TableComp from '../components/TableComp.vue';
    import ArchiveDialog from '../modals/ArchiveDialog.vue';

    const store = useStore();
    
    let modalVisible = ref(false);
    let chosenUserId : any = ref(null);

    const data = computed(() => store.getters.getCurrentEmployees);

    const toggleModal = (): boolean => modalVisible.value = !modalVisible.value;

    const eraseId = (): null => chosenUserId.value = null;

    const initModal = (id: number): void => {
        toggleModal();

        chosenUserId.value = id;
    }

    const deleteUser = (): void => {
        toggleModal();
        eraseId();
    }

    const archiveUser = (): void => {
        toggleModal();
        eraseId();
    }

</script>
<style scoped lang="scss">

    .btn-cont{
        justify-content: center;

        #new-empl-button {
            font-size: 1rem;
            padding: 20px;
        }
    }
</style>