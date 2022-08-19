<template>
    <div class="modal flex column">
        <div class="name-section flex">
             <div class="input-field">
                <label for="firstname">Firstname: </label>
                <input type="text" name="firstname"/>
            </div>
            <div class="input-field">
                <label for="lastname">Lastname: </label>
                <input type="text" name="lastname"/>
            </div>
        </div>
        <div class="name-section">
            <div class="input-field">
                <label for="adress">Address: </label>
                <input type="text" name="address"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field">
                <label for="dateofbirth">Date of birth: </label>
                <input type="text" name="dateofbirth"/>
            </div>
            <div class="input-field">
                <label for="workingsince">Working since: </label>
                <input type="text" name="workingsince"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field">
                <label for="position">Position: </label>
                <input type="text" name="dateofbirth"/>
            </div>
            <div class="input-field">
                <label for="workingsince">Working since: </label>
                <input type="text" name="workingsince"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { ref } from 'vue';

const variable = ref("string");

</script>
<style scoped lang="scss">

.modal {
    background-color: aquamarine;
    padding: 20px;
}
.name-section {
    max-width: 700px;
    padding-bottom: 10px;

    .input-field {
        flex: 1;
    }
}

input[type="text"] {
    border-radius: 5px;
    padding: 3px;
}
    
</style>