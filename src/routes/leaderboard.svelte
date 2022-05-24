<script lang="ts">
	import Panel from '../components/Panel.svelte';
</script>

<h1 class="center">Player Leaderboards</h1>

<Panel>
	<ul class="player-leaderboard">
		<li>Player</li>
		<li>Player</li>
		<li>Player</li>
		<li>Player</li>
		<li>Player</li>
	</ul>
</Panel>

<style>
	.player-leaderboard {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.player-leaderboard li {
		background: var(--theme-colors-secondary);
		margin-bottom: 5px;
		padding: 5px;
		box-sizing: border-box;
		cursor: pointer;
	}
</style>
