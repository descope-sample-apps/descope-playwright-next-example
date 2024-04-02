import { test, expect } from "@playwright/test";

test.use({ storageState: "playwright/.auth/user.json" });

test("Home Page Test", async ({ page }) => {
  await page.goto(`${process.env.PLAYWRIGHT_TEST_BASE_URL}/`);
  await expect(page.getByText(/Hello, U2/i)).toBeVisible();
});

test("Access Protected Page", async ({ page }) => {
  // The page is now under the authenticated state
  await page.goto(`${process.env.PLAYWRIGHT_TEST_BASE_URL}/protected`);

  // Assertions to verify the profile page's content
  await expect(page.getByText(/Hello, U2/i)).toBeVisible();
});

test("Test API endpoint", async ({ page }) => {
  const localStorage = await page.evaluate(() => localStorage.getItem("DS"));
  const token = JSON.parse(localStorage).split(".")[1];

  const response = await page.request(
    `${process.env.PLAYWRIGHT_TEST_BASE_URL}/test-api`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // Assert on the response status and body
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).toHaveProperty("sub");
});
