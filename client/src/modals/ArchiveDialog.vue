<template>
<div class="background">
    <div class="dialog flex column">
        <h4>
            <slot></slot>
            <h4>{{num}}</h4>
        </h4>
        <div class="dialog-buttons flex">
            <div class="d-button" v-if="!deleteOnly">
                <button class="button primary-button" @click="archiveEmp">Archive</button>
            </div>
            <div class="d-button">
                <button class="button delete-button" @click="deleteEmp">Delete</button>
            </div>
            <div class="d-button">
                <button class="button misc-button" @click="cancel">Cancel</button>
            </div>
        </div>    
    </div>
</div>
</template>

<script setup lang="ts">

    import { useStore } from 'vuex';
    import { ref, computed } from 'vue';

    const store = useStore();

    const num = computed(() => store.state.DialogManager.retrievedEmployeeId);

    const loadInitialState = (): void => {
        store.commit('CLEAR_USER_ID');
        store.commit('TOGGLE_DIALOG');
    }

    const archiveEmp = (): void => {
        loadInitialState();
    }

    const deleteEmp = (): void => {
        loadInitialState();
    }

    const cancel = (): void => {
        loadInitialState();
    }

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
        background-color: #0bac7c;

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