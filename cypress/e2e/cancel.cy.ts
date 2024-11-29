describe('결제 중 취소', () => {
  it('뭐가 있지', () => {
    
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('카드 등록 전 취소', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get('[d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"]').click();
    cy.get('.w-\\[385px\\]').click();
    cy.get('.h-\\[20px\\]').click();
    /* ==== End Cypress Studio ==== */
  });
})