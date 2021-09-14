const faker = require('faker');
const el = require('./elements').ELEMENTS;
import Routes from '../../routes';

class Cadastro {

        acessarCadastro () {
            cy.visit('register');
        }

        preencherFormularioCadastro() {
            cy.get(el.username).type(
                faker.name.lastName() + faker.name.lastName());
              cy.get(el.email).type(faker.internet.email());
              cy.get(el.password).type(faker.internet.password());
              cy.get(el.title).click();
            }

        validarCadastroCriadoSucesso(){

            cy.wait(`@${Routes.as.postUsers}`)
                .its('response.statusCode')
                    .should('eq', 200);
            cy.wait(`@${Routes.as.getArticlesFeed}`)
                .its('response.statusCode')
                .should('eq', 200);
        }
        

}

export default new Cadastro();