<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ _error, status }) {
		return {
			props: {
				title: status
			}
		};
	}
</script>

<script lang="ts">
	export let title: String;
</script>

<title>RithemBoards -- {title}</title>

<div class="container">
	<h1>{title}</h1>
</div>

<style>
	* {
		outline: 0;
		user-select: none;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	h1 {
		font-size: 10vw;
		font-family: sans-serif;
		text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa,
			0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
			0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
			0 20px 20px rgba(0, 0, 0, 0.15);
	}
</style>
