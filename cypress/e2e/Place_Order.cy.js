describe('Place Order Flow',()=>{
    before(()=>{
        cy.login()
    })
    it('Verify user can add order to cart',()=>{
        cy.get('a[href="/product_details/1"]').click()
        cy.contains('h2', 'Blue Top')
        cy.get('button[class="btn btn-default cart"]').click()
        cy.contains('p', 'Your product has been added to cart.').should('be.visible')
        
    })
    it('Verify user can view order in cart',()=>{
        cy.contains('u', 'View Cart').click();
        //cy.get('#id="product-1"').should('be.visible')
        cy.contains('a','Blue Top').should('be.visible')
    })
    
    it('Verify user can place order',()=>{
        cy.get(".btn.btn-default.check_out").click()
        cy.get('a[href="/payment"]').click()
        cy.get('input[name="name_on_card"]').type('Battousai Mayorkoon')
        cy.get('input[data-qa="card-number"]').type('12345678910') 
        cy.get('input[name="cvc"]').type('311')
        cy.get('input[name="expiry_month"]').type('12')
        cy.get('input[name="expiry_year"]').type('1993')
        cy.contains('button','Pay and Confirm Order').click()
        cy.wait(5000)
        cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible')

    })
})