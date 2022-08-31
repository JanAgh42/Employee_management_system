<template>
    <div class="btn-cont flex">
        <router-link to="/employee/add/new">
            <button class="button primary-button" id="new-entry-button">+ new employee</button>
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
                <EmployeeEntry v-for="entry in data" :key="entry.id"
                    :fName="entry.firstName" :lName="entry.lastName"
                    :position="entry.posEntries[entry.posEntries.length - 1].title" :id="entry.id"/>
            </template>
        </TableComp>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import EmployeeEntry from '../components/EmployeeEntry.vue';
    import TableComp from '../components/TableComp.vue';

    const store = useStore();

    const data = computed(() => store.state.CurrEmpManager.currentData);
</script>