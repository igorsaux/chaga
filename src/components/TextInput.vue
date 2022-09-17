<script setup lang="ts">
defineProps<{
	modelValue?: string
	placeholder?: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
	<input :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target?.value)"
		type="text">
</template>

<style scoped>
input {
	font-family: 'Segoe UI', sans-serif;
	font-size: 0.9em;
	appearance: none;
	padding: 0.4rem;
	background: hsl(210, 30%, 97%);
	border: 1px solid hsl(210, 18%, 85%);
	border-radius: 4px;
	outline: none;
	height: 32px;

	transition: all 250ms;
}

input:focus {
	background: hsl(210, 0%, 100%);
	border: 2px solid hsl(212, 92%, 45%);
}

input::placeholder {
	font-family: 'Segoe UI', sans-serif;
}
</style>
