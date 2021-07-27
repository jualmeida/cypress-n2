const faker = require('faker');
const el = require('./elements').ELEMENTS;
import Routes from '../../routes';

class Articles {
  acessarFormulario() {
    cy.get(el.linkPublicacao).click();
  }
  //Acao
  preencherFormulario() {
    cy.get(el.inputTitle).type('Artigo sobre QA');
    cy.get(el.inputDescription).type('Cypress');
    cy.get(el.textAreaContent).type(faker.lorem.paragraph());
    cy.get(el.inputTags).type('cypress');
  }

  //Submeter publicacao
  submeterPublicacao() {
    //POST 200 /api/articles
    //GET 200 /api/articles/artigo-sobre-qa-ddg5ne
    //GET 200 /api/articles/artigo-sobre-qa-ddg5ne/comments

    cy.get(el.buttonSubmit).click();
  }

  veridicarSeAPublicacaoFoiCriadaComSucesso() {
    //template string
    //cy.log()
    cy.wait(`@${Routes.as.postArticles}`)
      .its('response.statusCode')
      .should('eq', 200);

    cy.wait(`@${Routes.as.getArticlesTitle}`)
      .its('response.statusCode')
      .should('eq', 200);

    cy.wait(`@${Routes.as.getArticlesComments}`)
      .its('response.statusCode')
      .should('eq', 200);
  }
}

export default new Articles();
