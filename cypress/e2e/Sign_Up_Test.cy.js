
// function generateRandomEmail() {
//   const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   let email = '';
//   for (let i = 0; i < 10; i++) {
//     email += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   email += '@example.com'; // You can change the domain if needed
//   return email;
// }
import Chance from "chance" 
 const generateRandom = new Chance()
 let randomEmail = generateRandom.email()
describe("Sign Up Flow",()=>{
    before(()=>{
        cy.clearCookies()
        cy.visit('https://www.automationexercise.com')
    })

    it('Verify that user can Fill the name and Email address',()=>{
        cy.contains(' Signup / Login').click()
        cy.get('input[placeholder="Name"]').type('Test User')
        //let randomEmail = generateRandomEmail()
        cy.get('input[placeholder="Email Address"]').eq(1).type(randomEmail)
        cy.writeFile('cypress/fixtures/example.json', { randomEmail });
    })

    it('Verify that user can click the SignUp Button',()=>{
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('b').contains('Enter Account Information').should('be.visible');
    })
    
    it('Verify user can check title and fill the the password',()=>{
        cy.get('#id_gender1').check()
        cy.get('#password').type('Mayomikun@')
    })
    it('Validate that user can select Date of Birth',()=>{
        cy.get('#days').select('2')
        cy.get('#months').select('2')
        cy.get('#years').select('1992')
    })
    it('Verify that user can fill address information',()=>{
        cy.get('#first_name').type('Mayorkoon')
        cy.get('#last_name').type('Baby')
        cy.get('#company').type('Test Company')
        cy.get('#address1').type('No1, of my house')
        cy.get('#address2').type('On my street') 
        cy.get('#country').select('United States')
        cy.get('#state').type('Texas') 
        cy.get('#city').type('Houston') 
        cy.get('#zipcode').type('123456') 
        cy.get('#mobile_number').type('832-671-8325')
    })
    it('Verify user can click create account button and successfully create account',()=>{
        cy.get('button[data-qa="create-account"]').click()
        cy.contains('b', 'Account Created!').should('be.visible')
    })
    // after(()=>{
    //     cy.get('a[href="/logout"]').click()
    // })

    // it('Testing the command fucntion',()=>{
    //     cy.Sign_Up('testuser6@test.com')
    // })
})