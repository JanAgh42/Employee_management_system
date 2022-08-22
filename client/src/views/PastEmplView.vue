<template>
        <h1>Past employees</h1>
        <div class="table-content flex">
            <TableComp>
                <template v-slot:table-header>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Last position</th>
                    <th>Delete user</th>
                </template>
                <template v-slot:table-body>
                        <EmployeeEntry v-for="entry in data" :key="entry.id" :fName="entry.firstName" date="15.6." :lName="entry.lastName" :position="entry.position" :id="entry.id" @modal="initModal"/>
                </template>
            </TableComp>
        </div>
        <ArchiveDialog v-if="modalVisible" :deleteOnly="true" @hide="toggleModal(), eraseId()" @delete="deleteUser" @archive="archiveUser">
            Are you sure you want to delete this employee?
        </ArchiveDialog>
</template>
<script setup lang="ts">
import TableComp from '../components/TableComp.vue';
import EmployeeEntry from '../components/EmployeeEntry.vue';
import ArchiveDialog from '../modals/ArchiveDialog.vue';
import { useStore } from 'vuex';

import { ref, computed} from 'vue';

    let modalVisible = ref(false);

    let chosenUserId : any = ref(null);

    const store = useStore();

    const data = computed(() => store.getters.getPastEmployees);

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
<style lang="scss">
    
</style>