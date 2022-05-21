<title>RithemBoards -- Login</title>

<div class="panel">
	<h1 class="center">Log In</h1>

	<div class="item">
		<input type="text" id="username" placeholder="Username..." autocomplete="off" />
	</div>
	<div class="item">
		<input type="password" id="password" placeholder="Password..." autocomplete="off" />
	</div>
	<div class="button-container">
		<div class="button-offset">
			<button class="button button-compact">Login</button>
		</div>
	</div>
</div>

<style>
	.panel {
		background: var(--theme-colors-secondary);
		color: var(--theme-colors-text);
		width: 400px;
		margin-left: calc(50% - 200px);
		box-sizing: border-box;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px #000;
		text-align: center;
	}

	.item {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.button-container {
		display: flex;
		justify-content: center;
	}

	.button-offset {
		width: 215px;
		display: flex;
		justify-content: flex-end;
	}

	button {
		width: 40%;
	}
</style>
