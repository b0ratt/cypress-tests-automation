import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 20000,
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/tests/*/*.cy.ts",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
  },
});
