import Descope from "@descope/node-sdk";
import { type FullConfig } from "@playwright/test";
require("dotenv").config();

async function globalTeardown(config: FullConfig) {
  const descope = Descope({
    projectId:
      process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID ||
      "P2dI0leWLEC45BDmfxeOCSSOWiCt",
    managementKey: process.env.DESCOPE_MANAGEMENT_KEY,
  });
  await descope.management.user.delete(process.env.TEST_USER!);
}

export default globalTeardown;
