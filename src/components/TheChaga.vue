<script setup lang="ts">
import ChangelogInput from "./ChangelogInput.vue";
import RawChangelog from "./RawChangelog.vue";
</script>

<template>
	<div class="Chaga">
		<ChangelogInput />
		<RawChangelog />
	</div>
</template>


<style scoped>
.Chaga {
	display: flex;
	max-width: 90ch;
	margin: auto;
	flex-direction: column;
	align-items: center;
}
</style>
