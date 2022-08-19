<template>
    <div class="btn-cont flex">
        <button class="new-empl-button">Add new Employee</button>
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
                <EmployeeEntry v-for="entry in data" :key="entry.id" :employee="entry.name" :position="entry.position" :id="entry.id"/>
            </template>
        </TableComp>
    </div>
</template>
<script setup lang="ts">
    import { useStore } from 'vuex';
    import { ref } from 'vue';

    import EmployeeEntry from '../components/EmployeeEntry.vue';
    import TableComp from '../components/TableComp.vue';

    const store = useStore();
    
    const data = ref([
        {
            id: 1,
            name: 'user1',
            position: 'pos1'
        },
        {
            id: 2,
            name: 'user2',
            position: 'pos2'
        },
        {
            id: 3,
            name: 'user3',
            position: 'pos3'
        },
    ]);

</script>
<style scoped lang="scss">

    .btn-cont{
        justify-content: center;
        margin-bottom: 20px;
        .new-empl-button {
            padding: 20px;
            border-color: transparent;
            font-weight: bold;
            font-size: 1rem;
            border-radius: 10px;
            background-color: rgb(17, 93, 169);
            max-width: 200px;
            color: rgb(255, 255, 255);
        }
    }

    .table-content {
        justify-content: center;

        th {
            padding: 10px 50px;
            border: 1px solid black;
        }
    }
    
</style>