import { atom } from "recoil";

interface cart{
  index: number[],
  cnt: number[]
}

// 장바구니 상품 리스트
const cartState = atom<cart>({
  key: 'cartState',
  default: {
    index: [],
    cnt: []
  }
});

export default cartState;