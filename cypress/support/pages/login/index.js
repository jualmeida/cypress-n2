const el = require('./elements').ELEMENTS;

class Login {
  //acessar a pagina
  acessarLogin() {
    cy.visit('login');
  }

  //preencher formulario
  preencherFormulario() {
    cy.get(el.email).type(Cypress.config().user.email);
    cy.get(el.password).type(Cypress.config().user.password);
  }
  //submeter formulario
  submeterFormulario() {
    cy.get(el.buttonSubmit).click();
  }
}

export default new Login();
