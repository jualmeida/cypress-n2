class Routes {
  as = {
    postArticles: 'POSTArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesComments: 'GETArticlesComents'
  };

  init() {
    cy.intercept('POST', '**/api/articles').as(this.as.postArticles);
    cy.intercept('GET', '**/api/articles/artigo-sobre-qa-**').as(
      this.as.getArticlesTitle
    );
    cy.intercept('GET', '**/api/articles/artigo-sobre-qa-**/comments').as(
      this.as.getArticlesComments
    );
  }
}

export default new Routes();
