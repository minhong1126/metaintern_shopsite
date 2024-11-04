import { atom } from "recoil";

// 장바구니 상품 리스트
const cartState = atom({
  key: 'cartState',
  default: []
});

export default cartState;