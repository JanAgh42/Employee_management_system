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
                        <EmployeeEntry v-for="entry in items" :key="entry.id" :fName="entry.firstName" date="15.6." :lName="entry.lastName" :position="entry.position" :id="entry.id"/>
                </template>
            </TableComp>
        </div>
</template>
<script setup lang="ts">
import TableComp from '../components/TableComp.vue';
import EmployeeEntry from '../components/EmployeeEntry.vue';

import { ref, computed } from 'vue';

const data = ref([
        {
            id: 1,
            firstName: 'f1',
            lastName: 'l1',
            position: 'pos1',
            past: true
        },
        {
            id: 2,
            firstName: 'f2',
            lastName: 'l2',
            position: 'pos2',
            past: false
        },
        {
            id: 3,
            firstName: 'f3',
            lastName: 'l3',
            position: 'pos3',
            past: true
        },
    ]);

    const items = computed(() => data.value.filter(person => person.past === true));

</script>
<style lang="scss">
    
</style>