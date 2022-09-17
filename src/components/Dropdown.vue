<script setup lang="ts">
defineProps<{
	modelValue?: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
	<select :value="modelValue" @input="$emit('update:modelValue', $event.target?.value)">
		<slot></slot>
	</select>
</template>

<style scoped>
select {
	font-size: 0.9em;
	color: hsl(213, 13%, 15%);
	background: hsl(210, 0%, 100%);
	border: 1px solid hsl(210, 18%, 85%);
	border-radius: 4px;
	transition: all 250ms;
}
</style>
