/// <reference types = "cypress"/>

it ('open ramzinex' , function () {
cy.visit("https://ramzinex.com/")
cy.wait(2000)
//cy.get('#webpush-onsite').eq(0).click
cy.get('.d-flex.align-items-center.gap-2.h-100')
.should('be.visible')
cy.scrollTo(500, 500);
cy.wait(1000)
cy.scrollTo(500, 1000);
cy.wait(1000)
cy.scrollTo(0, 0);
// cy.get('[href="/sell-and-buy/only1/"]').click();
// cy.wait(2000)
// cy.get('#input-irr').type('1000000000')
// cy.get('.d-lg-none > :nth-child(2)').click();
// cy.wait(3000)
// cy.get('.gap-5 > .d-flex > img').click();
// cy.get(':nth-child(1) > .MuiList-root > [href="/sell-and-buy/hex-hex/"]').click();
// cy.wait(2000)
// cy.get('#input-irr').type('25000000')
// cy.get('.gap-5 > .d-flex > img').click();
cy.get('#markets-button').click();
cy.wait(2000)
cy.get('.MuiTableRow-root > :nth-child(4) > .MuiButtonBase-root').click();
cy.wait(2000)
cy.scrollTo(500, 2000);
cy.wait(1000)
cy.scrollTo(0, 0);
cy.wait(1000)
cy.get('.MuiInputBase-input').type('ترون')
cy.wait(1000)
cy.get(':nth-child(7) > .d-flex > :nth-child(2)').click();
cy.get(':nth-child(3) > .MuiButton-outlined').click();
cy.wait(1000)
cy.get('.MuiGrid-grid-md-3 > .MuiButtonBase-root').click();
cy.get('#input-irr').type(50000000)
cy.get('.gap-5 > .d-flex > img').click();
cy.get('#ramzbox-button').click();
cy.wait(3000)
cy.get('#panel-0-header > .MuiAccordionSummary-content').click();
cy.wait(1000)
cy.get('#panel-0-header > .MuiAccordionSummary-content').click();
cy.get('.gap-5 > .d-flex > img').click();
cy.get('.my-3 > .MuiButton-contained').click();
// y.scrollTo(100, 8000);

//cy.get('.MuiPaper-root > .MuiButton-containedPrimary').click();



//cy.get('#markets-tab-container > .rx-switch-control > :nth-child(2)').click();
//cy.get('.MuiPaper-root > .MuiButton-containedPrimary').click();
// cy.visit("https://ramzinex.com/exchange/pt/login")
// cy.get('#mobile-email').type('09128407660')
  })