<script setup lang="ts">
import ChangelogItem from "./ChangelogItem.vue";
import { useAppStore } from "@/stores/app";
import TextInput from "./TextInput.vue";
import Button from "./Button.vue";

const store = useAppStore();

function addItem() {
	store.addEntry({
		prefix: 'rscadd',
		message: ''
	})
}

</script>

<template>
	<div class="Changelog">
		<div class="ChangelogControls">
			<p>Мой дорогой 💖 чейнджлог...</p>
			<TextInput v-model="store.username" placeholder="Автор (необязательно)" />
			<template v-for="item in store.items" :key="item.id">
				<ChangelogItem :item="item" />
			</template>
			<Button title="Добавить запись" class="Thick" @click="addItem">
				<fa-icon icon="fa-solid fa-plus" />
			</Button>
		</div>
	</div>
</template>

<style scoped>
.Changelog {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.ChangelogControls {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.4rem;
	padding: 1rem;
	padding-bottom: 0;
	border: 1px solid hsl(210, 18%, 85%);
	border-radius: 4px 4px 0 0;
	border-bottom: none;
}

/* .Changelog::after {
	content: '';
	width: 100%;
	border: 1px solid hsl(210, 18%, 85%);
	border-style: dashed;
	border-top: none;
	border-bottom: 0;
	height: 64px;
} */

h2 {
	text-align: center;
	font-family: 'Segoe UI Light';
}

p {
	margin: 0;
}
</style>
