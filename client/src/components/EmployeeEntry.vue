<template>
    <tr class="employee-entry">
        <td>
            <router-link :to="{path: '/employee/current/' + id}" class="entry-name">{{fullName}}</router-link>
        </td>
        <td>{{position}}</td>
        <td>
            <router-link :to="{path: '/employee/edit/' + id}">
                <button class="button misc-button">Edit</button>
            </router-link>
        </td>
        <td>
            <button class="button primary-button" @click="toggle">Delete</button>
        </td>
    </tr>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const toggle = (): void => {
    store.commit('TOGGLE_ARCHIVE_DIALOG');
    store.commit('LOAD_USER_ID', {id: props.id, past: false});
}

const props = defineProps<{
    id: number,
    fName: string,
    lName: string,
    position: string
    }>();

const fullName = computed(() => props.fName + " " + props.lName);

</script>
<style scoped lang="scss">


    
</style>

 