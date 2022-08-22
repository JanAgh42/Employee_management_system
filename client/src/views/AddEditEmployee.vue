<template>

    <div class="button-cont flex">
        <button class="button misc-button" @click="$router.go(-1)">Return back</button>
        <button class="button primary-button" id="save-button" v-if="!viewOnly">Save changes</button>
    </div>

    <div class="modal flex column">
        <div class="name-section flex">
             <div class="input-field flex column">
                <label for="firstname">Firstname: </label>
                <input type="text" name="firstname" :disabled="viewOnly" :value="employee.firstName"/>
            </div>
            <div class="input-field flex column">
                <label for="lastname">Lastname: </label>
                <input type="text" name="lastname" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section">
            <div class="input-field flex column">
                <label for="adress">Address: </label>
                <input type="text" name="address" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field flex column">
                <label for="dateofbirth">Date of birth: </label>
                <input type="text" name="dateofbirth" :disabled="viewOnly"/>
            </div>
            <div class="input-field flex column">
                <label for="workingsince">Working since: </label>
                <input type="text" name="workingsince" :disabled="viewOnly"/>
            </div>
        </div>
        <div class="name-section flex">
             <div class="input-field flex column">
                <label for="position">Position: </label>
                <input type="text" name="position" :disabled="viewOnly"/>
            </div>
            <div class="input-field flex column">
                <label for="salary">Salary: </label>
                <input type="text" name="salary" :disabled="viewOnly"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    import { Employee } from '../models/TypesCollection';

    const route = useRoute();
    const store = useStore();

    let employeeId: number, employee: Employee;

    const viewOnly = computed(() => route.params.action === 'view');

    if(route.params.id !== 'new'){
        employeeId = Number(route.params.id);
        employee = ref(store.getters.getSpecificEmployee(employeeId));
    }
    else {
        employeeId = -1;
        employee = {
            id: -1,
            firstName: '',
            lastName: '',
            address: '',
            position: '',
            past: false
        };
    }
</script>

<style scoped lang="scss">

.modal {
    padding: 20px;
    min-width: 800px;
}
.name-section {
    padding-bottom: 10px;

    .input-field {
        flex: 1;
        margin: 10px;

        .disable {
            pointer-events: none;
        }

        label {
            align-self: flex-start;
            margin-bottom: 5px;
        }

        input[type="text"] {
            padding: 6px;
            border-style: none;
            background-color: rgb(231, 229, 229);
            border-radius: 7px;

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