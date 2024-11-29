describe('main', () => {
  it('URL 접속', () => {
    cy.visit('/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('상품담기', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(3) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(4) > .pl-\\[17px\\] > .flex > .bg-black').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('상품담기후취소', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(2) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-\\[\\#D8D8D8\\]').click();
    cy.get('.bg-\\[\\#D8D8D8\\]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('물건X장바구니이동', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('물건O장바구니이동', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(4) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(5) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('물건X구매버튼클릭', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-\\[\\#FFEF64\\]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('물건O구매버튼클릭', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(4) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(5) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(4) > .pl-\\[17px\\] > .flex > .bg-\\[\\#FFEF64\\]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('상세페이지이동', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(4) > .h-\\[115px\\]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('장바구니페이지이동', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    /* ==== End Cypress Studio ==== */
  });
})