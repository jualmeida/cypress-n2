/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'
import Routes from '../support/routes'


context('Cadastro', () => {
  
  beforeEach(() => {
    Routes.init();
  });
  it('Cadastrar um novo usuário', () => {
    
    cadastro.acessarCadastro();
    cadastro.preencherFormularioCadastro();
    cadastro.validarCadastroCriadoSucesso();

  });
});
