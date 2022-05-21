<script lang="ts">
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
	export let url: String;
	let transitionDuration = 500;
	let ready = false;
	onMount(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) transitionDuration = 0;
		ready = true;
	});
</script>

{#if ready}
	{#key url}
		<div
			in:fly={{ x: -5, duration: transitionDuration, delay: transitionDuration }}
			out:fly={{ x: 5, duration: transitionDuration }}
		>
			<slot />
		</div>
	{/key}
{/if}
