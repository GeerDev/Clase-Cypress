describe('Mi primer test', () => {
  it('Abrimos la página de ejemplo de Cypress', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Obviedad test', () => {
    expect(true).to.equal(true)
  })

  it('¿La palabra "type" existe en la página?', () => {
    cy.contains('type')
  })

  it('Click en "type"', () => {
    cy.contains('type').click()
  })

  it('¿La url contiene los parámetros introducidos?', () => {
    cy.url().should('include', '/commands/actions')
  })
  
  it('Rellenar el campo de email', () => {
    cy.get('#email1')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  })
})