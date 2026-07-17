describe('Login OrangeHRM', () => {

  const selectorsList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']"
  }

  it('Deve realizar login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.url().should('include', '/dashboard')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

 it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.usernameField).type('usuarioInvalido')
    cy.get(selectorsList.passwordField).type('senhaErrada123')
    cy.get(selectorsList.loginButton).click()

    cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials')
  cy.url().should('include', '/auth/login')
  })
})
