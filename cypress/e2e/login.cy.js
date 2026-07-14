describe('Login OrangeHRM', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
  })

 it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]').type('usuarioInvalido')
    cy.get('input[name="password"]').type('senhaErrada123')
    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
    cy.url().should('include', '/auth/login')
  })
})
