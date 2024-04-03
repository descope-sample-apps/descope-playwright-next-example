<img width="1400" alt="Screenshot 2024-04-01 at 1 22 03 PM" src="https://github.com/descope-sample-apps/descope-playwright-next-example/assets/32936811/a7dfdb81-73ec-4115-81ca-c0253e0960ac">

---

# Playwright / Next Sample App

This sample app demonstrates the integration of Descope authentication within a web application tested using Playwright's end-to-end testing capabilities. The app allows users to log in, and once authenticated, displays the user ID. It includes e2e tests to create a test user with the Descope Management SDK.

It also tests the Next.js SDK middleware by visiting a protected page with the saved auth state.

## Table of Contents 📝

1. [Installation](#installation)
2. [Setting Up Testing Environment](#setting-up-testing-environment)
3. [Running the Application](#running-the-application)
4. [Running Tests](#running-tests)
5. [Contributing](#contributing)
6. [Issue Reporting](#issue-reporting)
7. [License](#license)

## Installation 💿

To get started with this app, clone the repository and install dependencies:

```bash
git clone https://github.com/descope-sample-apps/descope-playwright-next-example.git
cd descope-playwright-next-example
npm install
```

## Setting Up Testing Environment 🌐

Before running the tests, ensure that you have set up your environment variables correctly by following these steps:

1. Get your Project ID from the [Project Settings](https://app.descope.com/settings/project) page.

> **NOTE:** If you're on the Pro or Enterprise tier, make sure that you turn off Refresh Token Rotation under [Project Settings](https://app.descope.com/settings/project), as this can cause issues saving the auth state between pages in your tests.

2. Then, create a Management key if you do not currently have one [here](https://app.descope.com/settings/company/managementkeys).

> **NOTE:** When you create the management key, ensure it is associated with the project you are testing with.

3. Set your environment variables within a .env file at the root of the directory (you can use the `.env.example` file):

```
NEXT_PUBLIC_DESCOPE_PROJECT_ID="YOUR PROJECT ID" // Required for Descope authentication
NEXT_PUBLIC_DESCOPE_SIGN_IN_FLOW_ID="sign-up-or-in" // Optional, if you would like to use a flow other than sign-up-or-in
DESCOPE_MANAGEMENT_KEY="YOUR MANAGEMENT KEY" // Optional, if you would like to run E2E tests
PLAYWRIGHT_TEST_BASE_URL="Deployment Status Target URL" // For running e2e tests in deployed app (not localhost)
```

After this, you're ready to run the application, and also the playwright end-to-end tests.

## Running the Application 🚀

To run the app locally, execute:

```bash
npm run dev
```

Navigate to `http://localhost:3000/` to see the app in action.

## Running Tests 🧪

The e2e tests can be run using the following command:

```bash
npx playwright test
```

> **NOTE:** If you don't already have playwright installed, you'll need to install it using the following command: `npx playwright install`. If you're on a linux/mac system, you might also need to run `npx playwright install msedge` to run the Microsoft Edge tests locally, from the root user.

The test setup script uses the Descope SDK to create a test user and logs them in using a magic link to simulate authentication for testing purposes.

## Contributing 🤝

Contributions are welcome! Please feel free to submit a pull request with your improvements or bug fixes.

## Issue Reporting ⚠️

If you encounter any issues or have suggestions for improvements, please report them by opening an issue in this repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
