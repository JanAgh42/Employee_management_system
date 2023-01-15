<template>
<div class="modal-background">
    <div class="dialog flex column">
        <h4>{{text}}</h4>    
    </div>
</div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const text = computed(() => store.state.DialogManager.confirmDialogText);
</script>

<style scoped lang="scss">
    .modal-background {
        position: absolute;
        bottom: 100px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        h4 {
            margin-bottom: 0;
        }
    }
</style>