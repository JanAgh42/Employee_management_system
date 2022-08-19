<template>
    <div class="dialog flex column">
        <h4>Would you like to archive this employee?</h4>
        <div class="dialog-buttons flex">
            <div class="d-button">
                <button class="button primary-button">Archive</button>
            </div>
            <div class="d-button">
                <button class="button misc-button">Cancel</button>
            </div>
            <div class="d-button">
                <button class="button delete-button">Delete</button>
            </div>
        </div>    
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.dialog {
    margin-left: 10px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 2px 4px 6px rgb(88, 88, 88);
    justify-content: space-evenly;

    .dialog-buttons {
        justify-content: space-evenly;

        button {
            padding: 10px;
            border-radius: 5px;
        }
    }
}
    
</style>