<template>
    <tr>
        <td>
            <router-link :to="{path: '/employeeInfo/' + id}">{{employee}}</router-link>
        </td>
        <td>{{position}}</td>
        <td>
            <button>Edit user</button>
        </td>
        <td>
            <button>Delete user</button>
        </td>
    </tr>
</template>
<script setup lang="ts">
import { computed } from 'vue';

defineProps<{
    id: number,
    employee: string,
    position: string
}>();

</script>
<style scoped lang="scss">

    tr {
        border-bottom: 1px solid black;
    }
    td {
        padding: 10px;
    }
</style>