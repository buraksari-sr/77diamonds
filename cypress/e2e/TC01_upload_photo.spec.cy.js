describe('Test Case 1', () => {
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

    it('Upload Photo', () => {
        // Visit the upload page
        cy.visit('/product-detail/1');

        // Click on the "Add" button to open the image upload popup
        cy.get('.btn').click();

        // Upload a file
        cy.get('input[type=file]').selectFile('cypress/fixtures/t-shirt_testphoto.jpg', { force: true })

        // Verify that the photo is uploaded successfully
        cy.get('.image').last().should('be.visible')
        cy.get('img[alt="t-shirt_testphoto.jpg"]').should('exist');
    })

})