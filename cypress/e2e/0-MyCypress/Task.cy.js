describe('', () => {
    beforeEach(() => { 
        cy.viewport(1000, 660)
        cy.visit('https://www.saucedemo.com')
        cy.title().should('eq', 'Swag Labs')
    });
  
  
    it('Login', () => {
        
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        
    });
  
        it('Positive Login Test', () => {
        
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce{enter}')
        cy.get('.title').should('include.text' , 'Products')       
        cy.log('Positive Login Test is Completed')
     });
  
      it('Negative Login Test-Invalid Username Invalid Password', () => {
        
        cy.get('[data-test="username"]').type('wrongUsername')
        cy.get('[data-test="password"]').type('wrongPassword{enter}')
        cy.get('[data-test="error"]').should('include.text' , 'do not match')       
       
    });

     it('Negative Login Test-Valid Username Invalid Password', () => {
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('wrongPassword{enter}')
        cy.get('[data-test="error"]').should('include.text' , 'do not match')       
        
    });


     it('Negative Login Test-Invalid Username Valid Password', () => {
        
        cy.get('[data-test="username"]').type('wrong_username')
        cy.get('[data-test="password"]').type('secret_sauce{enter}')
        cy.get('[data-test="error"]').should('include.text' , 'do not match')       
        cy.log('Negative Login Test is Completed')
        
    });

    });