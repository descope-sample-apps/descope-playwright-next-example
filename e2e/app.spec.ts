import { test, expect } from "@playwright/test";

test.use({ storageState: "playwright/.auth/user.json" });

test("test", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Hello, U2/i)).toBeVisible();
});

// test("access protected page", async ({ page }) => {
//   // The page is now under the authenticated state
//   await page.goto("/profile");

//   // Assertions to verify the profile page's content
//   await expect(page.getByText(/Protected Page/i)).toBeVisible();
// });
