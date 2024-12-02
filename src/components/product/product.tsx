import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../../state/state";

// product.tsx
// MainPage의 상품 컴포넌트 입니다.
// 상품 사진, 브랜드, 가격, 설명이 표시됩니다.
// 담기 버튼 클릭 시 장바구니에 담기고, 담김! 버튼 클릭 시 상품이 장바구니에서 빠집니다.
// 구매 버튼 클릭 시 장바구니에 1개 추가한 후 PaymentPage로 넘어갑니다.

interface ProductOption {
  index: number;
  brand: string;
  explanation: string;
  price: number;
  selected: boolean;
}

function Product(props: ProductOption) {
  const [clicked, setClicked] = useState(props.selected);
  const [cart, setCart] = useRecoilState(cartState);
  const nav = useNavigate();

  function addProduct() {
    setCart(prev => {
      if (!prev.index.includes(props.index)) { 
        const updatedIndexes = [...prev.index, props.index];
        const updatedCounts = [...prev.cnt, 1];
        return {
          index: updatedIndexes,
          cnt: updatedCounts
        };
      } else {
        const updatedCounts = [...prev.cnt];
        updatedCounts[prev.index.indexOf(props.index)] += 1;
        return {
          index: prev.index,
          cnt: updatedCounts
        };
      }
    });
  }
  

  function deleteProduct(){
    setCart(prev => {
      const updatedIndexes = prev.index.filter(index => index !== props.index);
      const updatedCounts = prev.cnt.filter((_, idx) => idx !== prev.index.indexOf(props.index));
      return {
        index: updatedIndexes,
        cnt: updatedCounts
      };
    });
  }

  // 장바구니 담긴 갯수 반환 - 이미 선택되어 있었을 때는 -1, 선택되어 있지 않았으면 +1
  function productClicked() {
    if (clicked) {
      deleteProduct();   
    } else {
      addProduct();
    }
    setClicked(!clicked);
  }

  // 인덱스로 사진 가져오기
  const address = require(`../../assets/product/img${props.index}.png`);

  function gotoPayment() {
    addProduct();
    nav(`/cart`);
  }

  function gotoProduct(){
    nav(`/product/${props.index}`);
  }

  return (
    <div className="h-[247px] w-[184px] border border-[#F2F2F2] rounded-[15px]">
      <img src={address} alt="상품 사진" className="h-[115px] w-[184px] object-cover" onClick={gotoProduct} />
      <div className="pl-[17px] pr-[12px] mt-[17px] pb-[20px] mb-[7px]">
        <h5 className="font-medium"> {props.brand} </h5>
        <p className="text-[12px] text-[#7C7A7A]"> {props.explanation} </p>
        <h6 className="text-[14px] font-medium"> {props.price}원 </h6>
        <div className="flex mt-[7px]">
          <button
            className={`h-[21px] w-[43px] rounded-[10px] text-[10px] ${clicked ? 'bg-[#D8D8D8] text-black' : 'bg-black text-white'}`}
            onClick={productClicked}
          >
            {clicked ? '담김!' : '담기'}
          </button>
          <button className="h-[21px] w-[43px] rounded-[10px] text-[10px] bg-[#FFEF64] ml-[9px]" onClick={gotoPayment}>
            구매
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
