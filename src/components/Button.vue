<script setup lang="ts">
</script>

<template>
	<button ref="target">
		<slot></slot>
	</button>
</template>

<style scoped>
button {
	color: hsl(213, 13%, 15%);
	appearance: none;
	background: hsl(210, 0%, 100%);
	border: 1px solid hsl(210, 18%, 85%);
	border-radius: 4px;
	transition: all 250ms;
}

button:hover {
	background: hsl(210, 0%, 95%);
	cursor: pointer;
}

.Bad {
	color: hsla(354, 65%, 55%);
}

.Thick {
	height: 32px;
}
</style>
