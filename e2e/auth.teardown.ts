import Descope from "@descope/nextjs-sdk";
import { createSdk } from "@descope/nextjs-sdk/server";
import { type FullConfig } from "@playwright/test";
require("dotenv").config();

async function globalTeardown(config: FullConfig) {
  const descope = createSdk({
    projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,
    managementKey: process.env.DESCOPE_MANAGEMENT_KEY,
  });
  await descope.management.user.delete(process.env.TEST_USER!);
}

export default globalTeardown;
