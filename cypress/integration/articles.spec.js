/// <reference types="cypress" />

import articles from '../support/pages/articles';
import Routes from '../support/routes';

context('Publicacao', () => {
  //Preparacao
  beforeEach(() => {
    Routes.init();
    cy.backgroundLogin();
    articles.acessarFormulario();
  });

  it('Criar uma nova prublicacao', () => {
    //Acao
    articles.preencherFormulario();
    articles.submeterPublicacao();
    //Verificacao
    articles.veridicarSeAPublicacaoFoiCriadaComSucesso();
  });
});

//AAA -> Arrange Act Assert
//PAV -> Preparacao Acao Verificacao
