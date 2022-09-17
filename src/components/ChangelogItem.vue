<script setup lang="ts">
import { useAppStore, type ChangelogItem } from '@/stores/app';
import { changelogPrefixToDisplay, changelogPrefixes } from '@/utils';
import { computed } from 'vue';
import TextInput from './TextInput.vue';
import Button from './Button.vue';
import Dropdown from './Dropdown.vue';

const store = useAppStore();

const props = defineProps<{
	item: ChangelogItem
}>()

const entry = computed(() => props.item.entry)
const prefixes = computed(() => changelogPrefixes())

function deleteEntry() {
	store.removeEntry(props.item.id)
}
</script>

<template>
	<div v-motion-slide-left class="ChangelogItem">
		<Dropdown v-model="entry.prefix">
			<template v-for="prefix in prefixes" :key="prefix">
				<option :value="prefix" :selected="prefix === entry.prefix">{{
				changelogPrefixToDisplay(prefix) }}
				</option>
			</template>
		</Dropdown>
		<TextInput placeholder="Описание изменения" class="MessageInput" v-model="entry.message" />
		<Button title="Удалить запись" class="Bad" @click.prevent="deleteEntry">
			<fa-icon icon="fa-solid fa-trash" />
		</Button>
	</div>
</template>

<style scoped>
.ChangelogItem {
	display: flex;
	gap: 0.4rem;
	width: 100%;
}

.MessageInput {
	width: 100%;
}
</style>
