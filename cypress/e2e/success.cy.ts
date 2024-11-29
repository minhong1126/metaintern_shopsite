describe('결제 완료', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('상품을 장바구니에 담은 후 결제 완료', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(4) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    cy.get('.w-\\[385px\\]').click();
    cy.get('div.flex > .flex').click();
    cy.get(':nth-child(1) > .default-input-styles').clear('1');
    cy.get(':nth-child(1) > .default-input-styles').type('1234567890123456');
    cy.get('[name="year"]').clear('12');
    cy.get('[name="year"]').type('12');
    cy.get('[name="month"]').clear();
    cy.get('[name="month"]').type('12');
    cy.get(':nth-child(3) > .default-input-styles').clear();
    cy.get(':nth-child(3) > .default-input-styles').type('name');
    cy.get(':nth-child(4) > .default-input-styles').clear();
    cy.get(':nth-child(4) > .default-input-styles').type('132');
    cy.get('[name="pw1"]').clear();
    cy.get('[name="pw1"]').type('1');
    cy.get('[name="pw2"]').clear();
    cy.get('[name="pw2"]').type('1');
    cy.get(':nth-child(6) > .flex').click();
    cy.get(':nth-child(2) > .flex').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('상품 구매 버튼 클릭 후 결제 완료', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-\\[\\#FFEF64\\]').click();
    cy.get('.w-\\[385px\\]').click();
    cy.get('.flex > svg').click();
    cy.get(':nth-child(1) > .default-input-styles').clear('1');
    cy.get(':nth-child(1) > .default-input-styles').type('1234567890123456');
    cy.get('[name="year"]').clear();
    cy.get('[name="year"]').type('11');
    cy.get('[name="month"]').clear();
    cy.get('[name="month"]').type('11');
    cy.get(':nth-child(3) > .default-input-styles').clear();
    cy.get(':nth-child(3) > .default-input-styles').type('name');
    cy.get(':nth-child(4) > .default-input-styles').clear();
    cy.get(':nth-child(4) > .default-input-styles').type('111');
    cy.get('[name="pw1"]').clear();
    cy.get('[name="pw1"]').type('1');
    cy.get('[name="pw2"]').clear();
    cy.get('[name="pw2"]').type('1');
    cy.get(':nth-child(6) > .flex').click();
    cy.get(':nth-child(2) > .flex').click();
    /* ==== End Cypress Studio ==== */
  });
})

describe('장바구니 내에서 상품 개수 변경', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('상품 개수 더하기', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    cy.get(':nth-child(1) > .ml-\\[22px\\] > .flex-col > .mt-\\[24px\\] > :nth-child(3)').click();
    cy.get(':nth-child(1) > .ml-\\[22px\\] > .flex-col > .mt-\\[24px\\] > :nth-child(3)').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('상품 개수 빼기', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(1) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(4) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get('button.h-\\[24px\\] > .h-\\[24px\\]').click();
    cy.get(':nth-child(1) > .ml-\\[22px\\] > .flex-col > .mt-\\[24px\\] > :nth-child(1)').click();
    /* ==== End Cypress Studio ==== */
  });
})

describe('상세 페이지 내에서 상품 개수 변경', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('장바구니 물건 담기', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(3) > .h-\\[115px\\]').click();
    cy.get(':nth-child(3) > .flex').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('물건 개수 추가해 담기', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(2) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(2) > .h-\\[115px\\]').click();
    cy.get('.mt-\\[22px\\] > :nth-child(3)').click();
    cy.get('.mt-\\[22px\\] > :nth-child(3)').click();
    cy.get(':nth-child(3) > .flex').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('상품 제거하기', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(2) > .pl-\\[17px\\] > .flex > .bg-black').click();
    cy.get(':nth-child(2) > .h-\\[115px\\]').click();
    cy.get('.mt-\\[22px\\] > :nth-child(1)').click();
    /* ==== End Cypress Studio ==== */
  });
})