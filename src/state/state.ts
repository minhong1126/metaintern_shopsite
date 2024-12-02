import { atom } from "recoil";

// state.ts
// Recoil 라이브러리의 atom을 모아두었습니다.
// productState: 총 상품 정보가 저장되어 있습니다. brandList(브랜드 목록), priceList(가격 목록), explainList(설명 목록)이 있습니다.
// cartState: 장바구니 상태를 저장할 수 있습니다. 초기에는 비어있으며, 상품이 추가되면 productList에서 상품의 인덱스를 index에 담고 그 개수를 cnt에 담습니다.

interface product{
  brandList: string[];
  priceList: number[];
  explainList: string[];
}

interface cart{
  index: number[],
  cnt: number[],
}

export const productState = atom<product>({
  key: 'product',
  default:{
    brandList: ["브랜드A", "브랜드A", "브랜드B", "브랜드B", "브랜드C", "브랜드C"],
    priceList: [35000, 25000, 35000, 35000, 35000, 35000],
    explainList : ["편안하고 착용감 좋은 신발", "힙한 컬러가 매력적인 신발"],
  }
});

// 장바구니 상품 리스트
export const cartState = atom<cart>({
  key: 'cartState',
  default: {
    index: [],
    cnt: [],
  }
});