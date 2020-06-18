///    <reference types = 'Cypress'/>

describe('Data driven testing on cypress',function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })

    })

    beforeEach(function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Test case on valid or invalid testing',function()
    {
        cy.get('#txtUsername').type(this.data.aemail_vaild)
        cy.get('#txtPassword').type(this.data.bpass_invalid)
        cy.get('#btnLogin').click()

    })
    
   

})


