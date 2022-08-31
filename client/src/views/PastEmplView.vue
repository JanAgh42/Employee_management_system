<template>
    <div class="table-content flex">
        <TableComp>
            <template v-slot:table-header>
                <th>Name</th>
                <th>Last position</th>
                <th>Date</th>
                <th>Delete user</th>
            </template>
            <template v-slot:table-body>
                <PastEmployeeEntry v-for="entry in data" :key="entry.id" 
                    :fName="entry.firstName" :date="dateModifier(entry.posEntries[entry.posEntries.length - 1].endDate)" 
                    :lName="entry.lastName" :position="entry.posEntries[entry.posEntries.length - 1].title" 
                    :id="entry.id"/>
            </template>
        </TableComp>
    </div>
</template>
<script setup lang="ts">
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { dateModifier } from '../utility/Miscellaneous';
    import TableComp from '../components/TableComp.vue';
    import PastEmployeeEntry from '../components/PastEmployeeEntry.vue';

    const store = useStore();

    const data = computed(() => store.state.PastEmpManager.pastData);

    if(data.value.length === 0){
        store.dispatch('GET_PAST_EMP_DATA');
    }
</script>