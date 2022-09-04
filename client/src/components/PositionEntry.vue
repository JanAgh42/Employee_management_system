<template>
    <tr class="entry">
        <td class="entry-name">{{position}}</td>
        <td v-if="id">
            <button class="button primary-button" @click="toggle">Delete</button>
        </td>
        <template v-else>
            <td class="thin">{{beginDate}}</td>
            <td class="thin">{{endDate}}</td>
        </template>
    </tr>
</template>

<script setup lang="ts">
    import { useStore } from 'vuex';
    import { deletePosPrompt } from '../utility/Constants';

    const props = defineProps<{
        id?: number,
        beginDate?: string,
        endDate?: string,
        position: string,
    }>();

    const store = useStore();

    const toggle = (): void => {
        store.commit('TOGGLE_ARCHIVE_DIALOG', deletePosPrompt);
        store.commit('LOAD_USER_ID', {id: props.id, past: true, position: true});
    }
</script>

<style scoped lang="scss">
    td {
        width: 300px;
        font-weight: bold;
    }
    .thin {
        font-weight:lighter;
    }
</style>