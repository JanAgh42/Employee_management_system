<template>
    <div class="button-cont flex">
        <button class="button misc-button" @click="$router.go(-1)">Return back</button>
        <button class="button primary-button" id="save-button" @click="validatePosition">Save position</button>
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
    import { useRouter } from 'vue-router';
    import { Position } from '../utility/TypesCollection';
    import { invalidPos } from '../utility/Constants';
    import InputComp from '../components/InputComp.vue';

    const store = useStore();
    const router = useRouter();

    let alreadyExists: boolean = false;
    const position: Position = reactive({
        positionId: 0,
        title: ''
    });

    const validatePosition = (): void => {
        position.title = position.title.trim();

        for(let pos of store.state.PositionManager.positionData) {
            if(pos.title.toLowerCase() === position.title.toLowerCase()) {
                alreadyExists = true;
            }
        }
        position.title !== '' && !alreadyExists ? uploadPosition() : store.commit('TOGGLE_CONFIRM_DIALOG', invalidPos);
        alreadyExists = false;
    }

    const uploadPosition = (): void => {
        store.dispatch('POST_POS_DATA', position);
        router.back();
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