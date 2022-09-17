<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';
import Button from './Button.vue';

const store = useAppStore();
const preRef = ref<HTMLPreElement | null>(null);

function renderOutput(): string {
	if (store.items.length === 0) {
		return ''
	}

	let html = "🆑";

	if (store.username) {
		html += ` <span class="Username">${store.username}</span>`
	}

	html += "\n"

	store.items.forEach((item, index) => {
		const { prefix, message } = item.entry

		if (message.trim() === '') {
			return
		}

		html += `<span class="Line"><span class="Prefix">${prefix}</span>: <span class="Message">${message}</span></span>`

		if (index !== store.items.length) {
			html += "\n"
		}
	})

	html += "/🆑"

	return html
}

function copyToClipboard() {
	if (!preRef.value) { return }

	const clipboard = navigator.clipboard
	clipboard.writeText(preRef.value?.innerText)
}
</script>

<template>
	<div class="DashedBorders">
		<div class="RawChangelog">
			<pre ref="preRef" class="ChangelogOut" v-html="renderOutput()" />
			<Button title="Скопировать" class="CopyButton" @click="copyToClipboard">
				<fa-icon icon="fa-solid fa-clipboard" />
			</Button>
		</div>
	</div>
</template>

<style>
.DashedBorders {
	width: 100%;
	border: 1px solid hsl(210, 18%, 85%);
	border-style: dashed;
	border-top: none;
	border-bottom: none;
}

.RawChangelog {
	position: relative;
	margin: 1rem;
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding: 0.4rem;
	border: 1px solid hsl(0, 0%, 90%);
	border-radius: 4px;
	background-color: hsl(0, 0%, 100%);
}

.ChangelogOut {
	margin: 0;
	padding: 0;
	min-height: 24px;
}

.Line {
	margin: 0;
}

.Username {
	color: #a31515;
}

.Prefix {
	color: #008080
}

.Message {
	color: #0451a5
}

.CopyButton {
	position: absolute;
	right: 0.4em;
	top: 0.4em;
	width: 24px;
	height: 24px;
}
</style>
