<template>
    <tr>
        <td>
            <router-link :to="{path: '/employee/view/' + id}" class="entry-name">{{fullName}}</router-link>
        </td>
        <td>{{date ? date : position}}</td>
        <td v-if="!date">
            <router-link :to="{path: '/employee/edit/' + id}">
                <button class="button misc-button">Edit employee</button>
            </router-link>

        </td>
        <td v-else>{{position}}</td>
        <td>
            <button class="button delete-button" @click="$emit('modal', id)">Delete employee</button>
        </td>
    </tr>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

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
        border-bottom: 1px solid black;

        td {
            padding: 10px;
        }
    }
</style>