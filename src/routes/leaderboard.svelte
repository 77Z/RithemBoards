<script lang="ts">
	import Panel from '../components/Panel.svelte';
</script>

<title>Player Leaderboards</title>

<h1 class="center">Player Leaderboards</h1>

<Panel>
	<ul class="player-leaderboard">
		<li>
			<div>
				<img src="/favicon.png" draggable="false" alt="Player Profile" />
			</div>
			<div>
				<p>Me</p>
			</div>
		</li>
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
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.player-leaderboard li img {
		height: 40px;
		width: 40px;
	}
</style>
