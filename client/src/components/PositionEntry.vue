<template>
    <tr class="entry">
        <td class="entry-name">{{position}}</td>
        <td>
            <button class="button primary-button" @click="toggle">Delete</button>
        </td>
    </tr>
</template>
<script setup lang="ts">
const props = defineProps<{
    id: number,
    position: string
    }>();

const toggle = (): void => {

}

</script>
<style scoped lang="scss">
    td {
        width: 300px;
        font-weight: bold;
    }
</style>