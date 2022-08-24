<template>
        <div class="table-content flex">
            <TableComp>
                <template v-slot:table-header>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Last position</th>
                    <th>Delete user</th>
                </template>
                <template v-slot:table-body>
                        <EmployeeEntry v-for="entry in data" :key="entry.id" :fName="entry.firstName" date="15.6." :lName="entry.lastName" :position="entry.position" :id="entry.id"/>
                </template>
            </TableComp>
        </div>
        <teleport to='#modal-container'>
            <ArchiveDialog v-if="modal" :deleteOnly="true">
                Are you sure you want to delete this employee?
            </ArchiveDialog>
        </teleport>
</template>
<script setup lang="ts">
import TableComp from '../components/TableComp.vue';
import EmployeeEntry from '../components/EmployeeEntry.vue';
import ArchiveDialog from '../modals/ArchiveDialog.vue';
import { useStore } from 'vuex';
import { ref, computed} from 'vue';

    const store = useStore();

    const data = computed(() => store.getters.getPastEmployees);
    const modal = computed(() => store.state.DialogManager.dialogVisibility);

</script>
<style lang="scss">
    
</style>