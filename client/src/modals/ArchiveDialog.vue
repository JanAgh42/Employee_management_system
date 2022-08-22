<template>
<div class="background">
    <div class="dialog flex column">
        <h4>
            <slot></slot>
        </h4>
        <div class="dialog-buttons flex">
            <div class="d-button" v-if="!deleteOnly">
                <button class="button primary-button" @click="$emit('archive')">Archive</button>
            </div>
            <div class="d-button">
                <button class="button delete-button" @click="$emit('delete')">Delete</button>
            </div>
            <div class="d-button">
                <button class="button misc-button" @click="$emit('hide')">Cancel</button>
            </div>
        </div>    
    </div>
</div>
</template>

<script setup lang="ts">

defineProps<{
    deleteOnly: boolean
}>();

</script>
<style scoped lang="scss">

.background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    .dialog {
        max-width: 500px;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 2px 4px 6px rgb(88, 88, 88);
        justify-content: space-evenly;
        background-color: rgb(255, 255, 255);

        h4 {
            margin-bottom: 30px;
        }

        .dialog-buttons {
            justify-content: space-evenly;

            button {
                padding: 10px;
                border-radius: 5px;
            }
        }
    }
}
    
</style>