<template>
        <h1>past</h1>
        <div class="table-content flex">
            <TableComp>
                <template v-slot:table-header>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Delete user</th>
                </template>
                <template v-slot:table-body>
                        <PastEmployeeEntry/>
                </template>
            </TableComp>
        </div>
</template>
<script setup lang="ts">
import TableComp from '../components/TableComp.vue';
import PastEmployeeEntry from '../components/PastEmployeeEntry.vue';

</script>
<style lang="scss">

.table-content {
        justify-content: center;

        th {
            padding: 10px 50px;
            border: 1px solid black;
        }
    }
    
</style>