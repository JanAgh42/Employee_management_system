<template>
    <div class="btn-cont flex">
        <router-link to="/employee/add/new">
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
               <PositionEntry  v-for="entry in data" :key="entry.id" :position="entry.position" :id="entry.id"/>
            </template>
        </TableComp>
    </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import TableComp from '../components/TableComp.vue';
import PositionEntry from '../components/PositionEntry.vue';

const store = useStore();

 const data = computed(() => store.state.PositionManager.positionData);

 if(data.value.length === 0){
        store.dispatch('GET_POS_DATA');
    }

</script>
<style scoped lang="scss">
    .btn-cont{
        justify-content: center;

        #new-entry-button {
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

    th {
        width: 300px;
    }
</style>