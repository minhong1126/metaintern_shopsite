describe('결제 중 취소', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('카드 등록 전 취소', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    cy.get('.w-\\[385px\\]').click();
    cy.get('.h-\\[20px\\] > path').click();
    /* ==== End Cypress Studio ==== */
  });

  it('카드 등록 중 취소', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    cy.get('.w-\\[385px\\]').click();
    cy.get('.flex > svg').click();
    cy.get(':nth-child(1) > .default-input-styles').clear('7777777777777777');
    cy.get(':nth-child(1) > .default-input-styles').type('7777777777777777');
    cy.get('[name="year"]').clear();
    cy.get('[name="year"]').type('77');
    cy.get('[name="month"]').clear();
    cy.get('[name="month"]').type('7');
    cy.get(':nth-child(3) > .default-input-styles').clear();
    cy.get(':nth-child(3) > .default-input-styles').type('ee');
    cy.get(':nth-child(4) > .default-input-styles').clear();
    cy.get(':nth-child(4) > .default-input-styles').type('777');
    cy.get('[name="pw1"]').clear();
    cy.get('[name="pw1"]').type('7');
    cy.get('[name="pw2"]').clear();
    cy.get('[name="pw2"]').type('7');
    cy.get('.h-\\[28px\\]').click();
    /* ==== End Cypress Studio ==== */
  })
})