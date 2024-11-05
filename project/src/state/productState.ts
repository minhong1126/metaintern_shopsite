import { atom } from "recoil";

// 전체 상품 리스트

interface product{
  brandList: string[];
  priceList: number[];
  explainList: string[];
}

const productState = atom<product>({
  key: 'product',
  default:{
    brandList: ["브랜드A", "브랜드A", "브랜드B", "브랜드B", "브랜드C", "브랜드C"],
    priceList: [35000, 25000, 35000, 35000, 35000, 35000],
    explainList : ["편안하고 착용감 좋은 신발", "힙한 컬러가 매력적인 신발"],
  }
});

export default productState;