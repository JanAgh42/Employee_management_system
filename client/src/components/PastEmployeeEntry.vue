<template>
    <tr class="entry">
        <td>
            <router-link :to="{path: '/employee/past/' + id}" class="entry-name">{{fullName}}</router-link>
        </td>
        <td>{{date}}</td>
        <td>{{position}}</td>
        <td>
            <button class="button primary-button" @click="toggle">Delete</button>
        </td>
    </tr>
</template>
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';

const props = defineProps<{
    id: number,
    fName: string,
    lName: string,
    position: string,
    date: string
    }>();

const store = useStore();

const toggle = (): void => {
    store.commit('TOGGLE_ARCHIVE_DIALOG');
    store.commit('LOAD_USER_ID', {id: props.id, past: true});
}

const fullName = computed(() => props.fName + " " + props.lName);
</script>
<style scoped lang="scss">

</style>