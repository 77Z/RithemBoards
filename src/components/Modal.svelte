<script lang="ts">
	let visible = false;

	export function openModel() {
		visible = true;
	}

	export function closeModal() {
		visible = false;
	}

	interface zoomParams {
		duration: number;
	}

	function zoom(node: Element, { duration }: zoomParams) {
		return {
			duration,
			css: (t: number) => {
				return `
					transform: scale(${t});
				`;
			}
		};
	}
</script>

<div class="bg {visible ? 'visible' : ''}" />
<div class="container {visible ? 'visible' : ''}" in:zoom={{ duration: 8000 }}>
	<div class="modal">
		<button
			class="material-symbols-outlined"
			aria-label="Close Popup Button"
			title="Close"
			on:click={closeModal}
		>
			close
		</button>
		<slot />
	</div>
</div>

<style>
	.bg {
		position: fixed;
		z-index: 60;
		background: #000000b0;
		backdrop-filter: blur(8px);
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		visibility: hidden;
	}

	.container {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 61;
		visibility: hidden;
	}

	.modal {
		position: fixed;
		width: 40%;
		background: var(--theme-colors-secondary);
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px #000;
	}

	button {
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.visible {
		visibility: visible;
	}

	button {
		border: none;
		background: none;
		padding: 5px;
		border-radius: 1000px;
		color: var(--theme-colors-text);
		cursor: pointer;
	}

	button:hover {
		background: #ffffff50;
	}
</style>
