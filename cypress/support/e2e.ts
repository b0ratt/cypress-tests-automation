import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      getSelector(value: string): Chainable<Element>;
    }
  }
}
