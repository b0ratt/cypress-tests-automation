import { Auth } from "../../page-objects/pages/auth/auth.page";

describe("Saucedemo Test", () => {
  // saucedemo.com

  it("Authentication", () => {
    const auth = new Auth();

    const testData = {
      standardUser: { login: "standard_user", password: "secret_sauce" },
      lockedOutUser: { login: "locked_out_user", password: "secret_sauce" },
      problemUser: { login: "problem_user", password: "secret_sauce" },
      performanceGlitch: { login: "performance_glitch_user", password: "secret_sauce" },
    };

    cy.visit("/");

    auth.fillUsername(testData.standardUser.login).fillPassword(testData.standardUser.password).clickLoginButton();
  });
});
