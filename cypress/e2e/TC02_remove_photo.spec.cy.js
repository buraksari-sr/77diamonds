describe('Test Case 2', () => {
    beforeEach(() => {
        cy.visit('/') // visits the baseUrl
    })

    it('Open Image Editor', () => {

        // open first product
        cy.get('.btn-primary').first().click({ force: true })

        // wait 1 second to call the api
        cy.wait(1000)

        // check if opened product id is equal to 1
        cy.url().should('include', '/product-detail/1')

        cy.get('.d-flex label').first().children('span').invoke('text').then((text) => {
            expect(text.trim()).equal('1')
        });
    })

    it('Remove Photo', () => {
        // Visit the upload page
        cy.visit('/product-detail/1');

        //Verify that a photo is present
        cy.get('img[alt="t-shirt_testphoto.jpg"]').should('exist');

        //Click on overlay button to remove the photo
        cy.get('.close-button').last().click()

        //Verify that the photo is removed
        cy.get('img[alt="t-shirt_testphoto.jpg"]').should('not.exist');
    })

})