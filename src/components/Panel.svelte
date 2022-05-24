<div class="panel">
	<slot />
</div>

<style>
	.panel {
		width: 60%;
		margin-left: 20%;
		box-shadow: 0 0 10px #000;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 7px;
	}

	@media (max-width: 900px) {
		.panel {
			width: 100%;
			margin-left: 0;
			box-shadow: none;
		}
	}
</style>
