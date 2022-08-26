<template>
    <table>
        <thead>
            <tr>
                <slot name="table-header"></slot>
            </tr>
        </thead>
        <tbody>
            <slot name="table-body"></slot>
        </tbody>
    </table>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
    table {
        border-collapse: collapse;
    }
</style>