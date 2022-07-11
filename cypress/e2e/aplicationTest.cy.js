describe('Test para testear CRUD de libros', () => {

    it('Abrimos la web', () => {
      cy.visit("http://localhost:3000")
      cy.contains("Books")
    })

    it("Get Books", function() {
        cy.window()
          .its("store")
          .invoke("getState")
          .its("books")
          .should("deep.equal", {
            books:[],
            book:{}
          })
    });

    it("Post Book", function() {
               cy.get('#name').click()
               cy.get('#name').type('Book 2')

               cy.get('#GenreId').click()
               cy.get('.rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click()

               cy.get('body').click()

               cy.get('#price').click()
               cy.get('#price').type('20')

               cy.wait(2000)
               cy.get('[type="submit"]').click()  

               cy.wait(3000)

               cy.window()
               .its("store")
               .invoke("getState")
               .its("books.books")
               .should("have.length", 1)
     });

     it("Edit Book", function() {
            cy.get('.anticon-edit').eq(0).click()
            cy.get('.ant-modal').should('be.visible')

            cy.window()
            .its("store")
            .invoke("getState")
            .its("books.book")
            .should('not.be.empty')

            cy.get('.nameModal').click()
            cy.get('.nameModal').clear()
            cy.get('.nameModal').type('Book 17')

            cy.wait(4000)

            cy.get('.buttonModal').click()

            cy.get('h2').first().contains('Book 17')   

            cy.wait(3000)
     });

     it("Delete Book", function() {
            cy.get('.anticon-delete').eq(0).click()
     });

})
