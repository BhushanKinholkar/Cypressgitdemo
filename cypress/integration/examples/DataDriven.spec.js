
import Sample from "../POM_Pages/Sample"

describe('Data driven testing on cypress',function()
{

    const sp = new Sample()

    it('Test case on valid or invalid testing',function()
    {
       cy.visit("https://opensource-demo.orangehrmlive.com/")
       sp.Signin()

    })
    
   

})


