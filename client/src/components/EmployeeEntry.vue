<template>
    <tr>
        <td>
            <router-link :to="{path: '/employee/view/' + id}" class="entry-name">{{fullName}}</router-link>
        </td>
        <td>{{date ? date : position}}</td>
        <td v-if="!date">
            <router-link :to="{path: '/employee/edit/' + id}">
                <button class="button misc-button">Edit</button>
            </router-link>

        </td>
        <td v-else>{{position}}</td>
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
    store.commit('TOGGLE_DIALOG');
    store.commit('LOAD_USER_ID', props.id);
}

const props = defineProps<{
    id: number,
    fName: string,
    lName: string,
    position: string,
    date?: string
    }>();

const fullName = computed(() => props.fName + " " + props.lName);

</script>
<style scoped lang="scss">

    tr {
        background-color: rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);

        &:hover {
            background-color: rgba(255, 255, 255, 0.15);
        }

        td {
            color: rgb(255, 255, 255);
            padding: 10px;

            a {
                color: rgb(255, 255, 255);
            }
        }
    }
</style>