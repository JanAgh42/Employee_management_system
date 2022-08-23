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
        border-bottom: 2px solid rgba(255, 255, 255, 0.5);;
        border-collapse: collapse;
    }
</style>