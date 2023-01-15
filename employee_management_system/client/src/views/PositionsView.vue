<template>
    <div class="btn-cont flex">
        <router-link to="/positions/new">
            <button class="button primary-button" id="new-entry-button">+ new position</button>
        </router-link>
    </div>
    <div class="table-content flex">
        <TableComp>
            <template v-slot:table-header>
                <th>Position name</th>
                <th>Delete position</th>          
            </template>
            <template v-slot:table-body>
               <PositionEntry  v-for="entry in data" :key="entry.positionId" :position="entry.title" :id="entry.positionId"/>
            </template>
        </TableComp>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import TableComp from '../components/TableComp.vue';
    import PositionEntry from '../components/PositionEntry.vue';

    const store = useStore();

    const data = computed(() => store.state.PositionManager.positionData);

    if(data.value.length === 0){
        store.dispatch('GET_POS_DATA');
    }
</script>

<style scoped lang="scss">
    th {
        width: 300px;
    }
</style>