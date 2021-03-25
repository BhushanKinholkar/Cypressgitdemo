
var data = require("../../fixtures/example")

class Sample
{
    Signin()
    {
        cy.get("#txtUsername").type(data.email)
        cy.get("#txtPassword").type(data.pass)
        cy.get("#btnLogin").click()
    }

}

export default Sample