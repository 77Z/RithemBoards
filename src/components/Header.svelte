<script lang="ts">
	import { fly } from 'svelte/transition';

	let ready = 0;

	setTimeout(() => {
		ready = 1;
	}, 300);
</script>

<header>
	{#if ready}
		<a
			class="title title-font"
			href="/"
			sveltekit:prefetch
			transition:fly={{ x: 50, duration: 1000 }}>RithemBoards</a
		>
	{/if}

	<div class="toolbox">
		<div class="searchbox">
			<span class="material-symbols-outlined">search</span>
		</div>
		<a class="login" sveltekit:prefetch href="/login">Log In</a>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background: #222;
		box-sizing: border-box;
		padding: 5px;
	}

	.toolbox {
		display: inline-flex;
		align-items: center;
		justify-content: end;
		width: 400px;
		float: right;
	}

	.searchbox {
		background: #111;
		height: 30px;
		width: 100px;
	}

	.title {
		font-size: 30px;
		color: #fff;
		text-decoration: none;
	}

	.login {
		color: #fff;
		text-decoration: none;
	}
</style>
