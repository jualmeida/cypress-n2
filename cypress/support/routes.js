class Routes {
  as = {
    postArticles: 'POSTArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesComments: 'GETArticlesComents',
    getArticlesFeed: 'GETArticlesFeed',
    postUsers: 'postUsers'
    
  };

  init() {
    cy.intercept('POST', '**/api/articles').as(this.as.postArticles);
    cy.intercept('GET', '**/api/articles/artigo-sobre-qa-**').as(
      this.as.getArticlesTitle
    );
    cy.intercept('GET', '**/api/articles/artigo-sobre-qa-**/comments').as(
      this.as.getArticlesComments
    );
    cy.intercept('POST', '**/api/users').as(this.as.postUsers);
    cy.intercept('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);
  }
}

export default new Routes();
