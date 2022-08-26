<template>
<div class="modal-background">
    <div class="dialog flex column">
        <h4>{{text}}</h4>
        <div class="dialog-buttons flex">
            <div class="d-button">
                <button class="button misc-button" @click="toggle">Close</button>
            </div>
        </div>    
    </div>
</div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const text = computed(() => store.state.DialogManager.confirmDialogText);

const toggle = (): void => {
    store.commit('TOGGLE_CONFIRM_DIALOG');
}

</script>
<style scoped lang="scss">

</style>