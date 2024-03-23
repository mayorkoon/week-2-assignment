let testData
describe('Login Suite',()=>{
    before(()=>{
        cy.fixture('example').then((data)=>{
                testData = data
        })
        cy.clearCookies()
        cy.visit('https://www.automationexercise.com')
    })
    it('Login Test',()=>{
        cy.contains(' Signup / Login').click()
        //cy.window().its('randomEmail').then((randomEmail))
        cy.get('input[placeholder="Email Address"]').eq(0).type(testData.randomEmail)
        cy.get('input[placeholder="Password"]').type('Mayomikun@')
        cy.get('button[data-qa="login-button"]').click()
        cy.contains(' Logged in as ').should('be.visible')
    })
})