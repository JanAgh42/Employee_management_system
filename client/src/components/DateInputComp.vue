<template>
    <div class="input-field flex column">
        <label :for="name">{{name}}: </label>
        <div class="flex">
            <input type="text" :name="name" class="date-show" disabled="true" v-model="chosenDate"/>
            <input type="date" :disabled="viewOnly" class="date-pick"
                :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { dateModifier } from '../utility/Miscellaneous';

    const props = defineProps<{
        name: string,
        viewOnly: boolean,
        date: Date,
        modelValue: string
    }>();

    const chosenDate = computed(() =>  dateModifier(props.date.toISOString()));
</script>

<style lang="scss">
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        width: 50px;
    }

    .date-pick {
        flex: 1;
        margin-left: 7px;
        max-width: 29px;
    }

    .date-show {
        flex: 10;
    }
</style>