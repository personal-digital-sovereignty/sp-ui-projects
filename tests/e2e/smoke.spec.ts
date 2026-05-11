import { test, expect } from '@playwright/test';
test.describe('sp-ui-projects', () => {
	test('projects page loads', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('body')).toBeVisible();
	});
	test('kanban board renders', async ({ page }) => {
		await page.goto('/projects');
		await expect(page.locator('body')).toBeVisible();
	});
});
