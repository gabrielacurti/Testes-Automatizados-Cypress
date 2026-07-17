import userData from '../fixtures/user-data.json'

describe('Login OrangeHRM', () => {

  const selectorsList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']"
  }

  

  it('Deve realizar login com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.url().should('include', '/dashboard')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

 it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()

    cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials')
  cy.url().should('include', '/auth/login')
  })
})
