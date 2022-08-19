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
                <EmployeeEntry v-for="entry in data" :key="entry.id" :fName="entry.firstName" :lName="entry.lastName" :position="entry.position" :id="entry.id"/>
            </template>
        </TableComp>
        <ArchiveDialog/>
    </div>
</template>
<script setup lang="ts">
    import { useStore } from 'vuex';
    import { ref } from 'vue';

    import EmployeeEntry from '../components/EmployeeEntry.vue';
    import TableComp from '../components/TableComp.vue';
    import ArchiveDialog from '../modals/ArchiveDialog.vue';

    const store = useStore();
    
    const data = ref([
        {
            id: 1,
            firstName: 'f1',
            lastName: 'l1',
            position: 'pos1'
        },
        {
            id: 2,
            firstName: 'f2',
            lastName: 'l2',
            position: 'pos2'
        },
        {
            id: 3,
            firstName: 'f3',
            lastName: 'l3',
            position: 'pos3'
        },
    ]);

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