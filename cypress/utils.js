export const baseUrl = 'http://localhost:3000'
export const getElement = (element) => cy.get(`[data-cy=${element}]`)