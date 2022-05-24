import { expect, test } from '@playwright/test';

test('index page has title text', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('a')).toBe('RithemBoards');
});
