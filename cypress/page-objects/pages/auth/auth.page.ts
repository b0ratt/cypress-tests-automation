import Chainable = Cypress.Chainable;

export class Auth {
  fillUsername(username: string): this {
    this.getUsernameInput().click().type(username);
    return this;
  }

  fillPassword(password: string): this {
    this.getPasswordInput().click().type(password);
    return this;
  }

  clickLoginButton(): this {
    this.getLoginButton().click();
    return this;
  }

  private getUsernameInput(): Chainable {
    return cy.getSelector("username");
  }

  private getPasswordInput(): Chainable {
    return cy.getSelector("password");
  }

  private getLoginButton(): Chainable {
    return cy.getSelector("login-button");
  }
}
