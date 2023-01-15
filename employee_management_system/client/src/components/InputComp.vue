<template>
    <div class="input-field flex column">
        <label :for="name">{{name}}: </label>
        <input type="text" 
            :name="name" 
            :disabled="viewOnly" 
            :value="modelValue" 
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"/>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        name: string,
        viewOnly?: boolean,
        modelValue: string | number | undefined
    }>();
</script>