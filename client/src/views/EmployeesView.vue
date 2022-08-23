<template>
    <div class="btn-cont flex">
        <router-link to="/employee/add/new">
            <button class="button primary-button" id="new-empl-button">+ new employee</button>
        </router-link>
    </div>
    <div class="table-content flex">
        <TableComp>
            <template v-slot:table-header>
                <th>Name</th>
                <th>Actual position</th>
                <th>Edit employee</th>
                <th>Delete employee</th>          
            </template>
            <template v-slot:table-body>
                <EmployeeEntry v-for="entry in data" :key="entry.id" :fName="entry.firstName" :lName="entry.lastName" :position="entry.position" :id="entry.id"/>
            </template>
        </TableComp>
    </div>
    <teleport to='#modal-container'>
        <ArchiveDialog v-if="modal" :deleteOnly="false">
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

    const data = computed(() => store.getters.getCurrentEmployees);
    const modal = computed(() => store.state.DialogManager.dialogVisibility);

</script>
<style scoped lang="scss">

    .btn-cont{
        justify-content: center;

        #new-empl-button {
            position: absolute;
            top: 25px;
            right: 60px;
            font-size: 1rem;
            padding: 10px 25px;
            background-color: rgb(255, 255, 255);

            &:hover {
                background-color: rgb(236, 236, 236);
            }
        }
    }
</style>