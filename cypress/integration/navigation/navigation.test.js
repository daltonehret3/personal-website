import {baseUrl, getElement} from "../../utils";

describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('should navigate to the about me page', () => {
        getElement('aboutButton').click();

        cy.url().should('eq', `${baseUrl}/about`)
    });

    it('should navigate to the contact page', () => {
        getElement('contactButton').click();

        cy.url().should('eq', `${baseUrl}/contact`)
    });

    it('should navigate to the Projects page', () => {
        getElement('projectsButton').click();

        cy.url().should('eq', `${baseUrl}/projects`)
    });

});