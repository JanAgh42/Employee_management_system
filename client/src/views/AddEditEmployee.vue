<template>

    <div class="button-cont flex">
        <button class="button misc-button" @click="$router.go(-1)">Return back</button>
        <button class="button primary-button" id="save-button" v-if="!viewOnly">Save changes</button>
    </div>

    <div class="modal flex column">
        <div class="name-section flex">
             <div class="input-field">
                <label for="firstname">Firstname: </label>
                <input type="text" name="firstname" :disabled="viewOnly"/>
            </div>
            <div class="input-field">
                <label for="lastname">Lastname: </label>
                <input type="text" name="lastname" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section">
            <div class="input-field">
                <label for="adress">Address: </label>
                <input type="text" name="address" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field">
                <label for="dateofbirth">Date of birth: </label>
                <input type="text" name="dateofbirth" :disabled="viewOnly"/>
            </div>
            <div class="input-field">
                <label for="workingsince">Working since: </label>
                <input type="text" name="workingsince" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field">
                <label for="position">Position: </label>
                <input type="text" name="position" :disabled="viewOnly"/>
            </div>
            <div class="input-field">
                <label for="salary">Salary: </label>
                <input type="text" name="salary" :disabled="viewOnly"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const viewOnly = computed(() => useRoute().params.action === 'view');

</script>

<style scoped lang="scss">

.modal {
    padding: 20px;
}
.name-section {
    max-width: 700px;
    padding-bottom: 10px;

    .input-field {
        flex: 1;

        .disable {
            pointer-events: none;
        }

        input[type="text"] {
            padding: 3px;
            border-style: none;
            border-bottom: 1px solid black;
            background-color: rgb(255, 255, 255);

            &:focus {
                outline: none;
            }
        }
    }
}

.button-cont {
    margin-bottom: 20px;
    justify-content: space-evenly;

    #save-button {
        padding: 10px;
        border-radius: 5px;
    }
}
    
</style>