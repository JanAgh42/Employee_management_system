<template>
    <tr class="entry">
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
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { archivePrompt } from '../utility/Constants';

    const props = defineProps<{
        id: number,
        fName: string,
        lName: string,
        position: string
        }>();

    const store = useStore();

    const fullName = computed(() => props.fName + " " + props.lName);

    const toggle = (): void => {
        store.commit('TOGGLE_ARCHIVE_DIALOG', archivePrompt);
        store.commit('LOAD_USER_ID', {id: props.id, past: false});
    }
</script>