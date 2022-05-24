<script context="module" lang="js">
	/** @type {import('@sveltejs/kit').Load} */
	//@ts-expect-error
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { ThemeWrapper } from 'svelte-themer';
	import { themes } from '../themes';
	import Modal from '../components/Modal.svelte';
	import { get } from 'svelte/store';
	import { currentThemeName, themes as themesStore } from 'svelte-themer/support/store';

	import PageTransition from '../components/PageTransition.svelte';
	export let url: String;

	let searchInput: HTMLInputElement;

	let showShadow = false;

	let accessibilityModalComponent: Modal;

	function openAccessibilityModal() {
		accessibilityModalComponent.openModel();
	}

	function changeTheme(themeToUse: number) {
		let themes = get(themesStore);
		currentThemeName.update((current) => {
			let keys = Object.keys(themes);
			return keys.reduce((newCurrent, theme, index, source) => {
				if (theme === current) {
					return source[themeToUse];
				}
				return newCurrent;
			}, '');
		});
	}

	onMount(async () => {
		document.addEventListener('keydown', (e) => {
			const key = e.key || e.keyCode;
			if (key == '/') {
				e.preventDefault();
				focusOnSearch();
			}

			if (e.ctrlKey && key == 'p') {
				e.preventDefault();
				openAccessibilityModal();
			}
		});

		onscroll = () => {
			let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollPos > 5) showShadow = true;
			else showShadow = false;
		};
	});

	function focusOnSearch() {
		// let searchInput = document.getElementById('searchinput') as HTMLInputElement;
		searchInput.focus();
	}
</script>

<ThemeWrapper {themes}>
	<a href="#content" class="accessibility-link"> Skip Navigation </a>
	<button class="accessibility-link" on:click={openAccessibilityModal}>
		Accessibility Settings
	</button>

	<header class={showShadow ? 'navbar-shadow' : ''}>
		<a class="title title-font" sveltekit:prefetch href="/">RithemBoards</a>

		<div class="toolbox">
			<button
				class="material-symbols-outlined settings-button"
				aria-label="Website Settings"
				on:click={openAccessibilityModal}
				title="Website Settings (Ctrl + P)">settings</button
			>
			<div class="searchbox" on:click={focusOnSearch}>
				<span class="material-symbols-outlined search-icon">search</span>
				<input
					type="text"
					bind:this={searchInput}
					placeholder="Search..."
					class="searchInput"
					aria-label="Search Input"
				/>
				<span class="keycap">/</span>
			</div>
			<a class="toplink" href="https://rithem.77z.dev">Get Rithem</a>
			<a class="toplink" sveltekit:prefetch href="/login">Log In</a>
		</div>
	</header>

	<div class="content" id="content">
		<PageTransition {url}>
			<slot />
		</PageTransition>
	</div>

	<!-- <footer>
		<a href="/about">About</a> |
		<a href="/privacy">Privacy Policy</a>
	</footer> -->

	<Modal bind:this={accessibilityModalComponent}>
		<h1>Settings</h1>
		<p>
			By default system settings will control these values, but as a backup, these are overrides
		</p>
		<div>
			<input type="checkbox" />
			<span>Reduced Motion</span>
		</div>
		<div class="themes-picker">
			<div
				on:click={(e) => {
					changeTheme(0);
				}}
			>
				Dark
			</div>
			<div
				on:click={(e) => {
					changeTheme(1);
				}}
			>
				Light
			</div>
			<div
				on:click={(e) => {
					changeTheme(2);
				}}
			>
				Dark High Contrast
			</div>
			<div
				on:click={(e) => {
					changeTheme(3);
				}}
			>
				Dark High Contrast
			</div>
		</div>
		<div>
			<a href="/about" on:click={accessibilityModalComponent.closeModal}>About</a> |
			<a href="/privacy" on:click={accessibilityModalComponent.closeModal}>Privacy Policy</a>
		</div>
	</Modal>
</ThemeWrapper>

<style>
	.content {
		margin-top: 70px;
	}

	/* Header */
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background: var(--theme-colors-background);
		box-sizing: border-box;
		padding: 5px;
		transition: 0.5s box-shadow;
	}

	.toolbox {
		display: inline-flex;
		align-items: center;
		justify-content: end;
		width: calc(100% - 300px);
		float: right;
	}

	.title {
		font-size: 30px;
		color: var(--theme-colors-text);
		text-decoration: none;
	}

	.toplink {
		color: var(--theme-colors-text);
		text-decoration: none;
		margin-left: 10px;
		margin-right: 10px;
	}

	.searchbox {
		background: var(--theme-colors-primary);
		color: var(--theme-colors-text);
		height: 30px;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		gap: 5px;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 5px;
		cursor: text;
	}

	.searchInput {
		width: 120px;
		background: none;
		border: none;
		color: var(--theme-colors-text);
	}

	.searchInput:focus {
		box-shadow: none;
		width: 400px;
	}

	.keycap {
		height: 20px;
		width: 20px;
		border: 1px solid #999999;
		color: #999999;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: monospace;
		user-select: none;
	}

	.search-icon {
		color: #999999;
	}

	.accessibility-link {
		position: fixed;
		height: 0;
		width: 0;
		top: 0;
		left: 0;
	}

	.accessibility-link:focus {
		height: unset;
		width: unset;
		top: 10px;
		left: 10px;
		background: var(--main-accent-color);
		z-index: 100;
		color: var(--main-fg-color);
		text-decoration: none;
		margin: 0;
		padding: 20px;
	}

	.navbar-shadow {
		box-shadow: 0 0 30px #000;
	}

	.settings-button {
		background: none;
		cursor: pointer;
		border-radius: 1000px;
		border: none;
		height: 30px;
		width: 30px;
		color: var(--main-fg-color);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 20px;
	}

	.settings-button:hover {
		background: #ffffff50;
	}

	.themes-picker {
		border-radius: 10px;
		border: 2px solid #fff;
	}

	.themes-picker div {
		padding: 10px 20px;
		cursor: pointer;
	}

	.themes-picker div:hover {
		background: #ffffff50;
	}

	.themes-picker div:not(:last-child) {
		border-bottom: 2px solid #fff;
	}
</style>
