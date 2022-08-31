<template>
    <div class="button-cont flex">
        <button class="button misc-button" @click="$router.go(-1)">Return back</button>
        <button class="button primary-button" id="save-button" @click="savePosition">Save position</button>
    </div>
    <div class="modal flex column">
        <div class="name-section flex">
             <InputComp name="Title" v-model="position.title"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import { useStore } from 'vuex';
    import { Position } from '../utility/TypesCollection';
    import InputComp from '../components/InputComp.vue';

    const store = useStore();

    const text = 'Invalid position name.';
    const position: Position = reactive({
        positionId: 0,
        title: ''
    });

    const savePosition = (): void => {
        position.title = position.title.trim();
        position.title !== '' ? store.dispatch('POST_POS_DATA', position) : store.commit('TOGGLE_CONFIRM_DIALOG', text);
    }
</script>

<style scoped lang="scss">
    .modal {
        padding: 20px;
        min-width: 500px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;

        .name-section {
            padding-bottom: 10px;
        }
    }
</style>