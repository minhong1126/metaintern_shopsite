import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../../state/state";

// TypeScript 타입 설정
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

  // 장바구니 담긴 갯수 반환 - 이미 선택되어 있었을 때는 -1, 선택되어 있지 않았으면 +1
  function productClicked() {
    if (clicked) {
      setCart(prev => {
        const updatedIndexes = prev.index.filter(index => index !== props.index);
        const updatedCounts = prev.cnt.filter((_, idx) => idx !== prev.index.indexOf(props.index));
        console.error(updatedCounts, updatedIndexes);
        return {
          index: updatedIndexes,
          cnt: updatedCounts
        };
      });
    } else {
      setCart(prev => {
        const updatedIndexes = [...prev.index, props.index];
        const updatedCounts = [...prev.cnt, 1]; 
        console.error(updatedCounts, updatedIndexes);
        return {
          index: updatedIndexes,
          cnt: updatedCounts
        };
      });
    }
    setClicked(!clicked);
  }

  // 인덱스로 사진 가져오기
  const address = require(`../../assets/product/img${props.index}.png`);

  function gotoPayment() {
    nav(`/pay`);
  }

  function gotoProduct(){
    nav(`/product/${props.index}`);
  }

  return (
    <div className="h-[247px] w-[184px] border border-[#F2F2F2] rounded-[15px]">
      <img src={address} alt="상품 사진" className="h-[115px] w-[184px] object-cover" onClick={gotoProduct} />
      <div className="pl-[17px] pr-[12px] pt-[17px] pb-[20px] mb-[7px]">
        <p className="text-[16px] font-medium"> {props.brand} </p>
        <p className="text-[13px] text-[#7C7A7A]"> {props.explanation} </p>
        <p className="text-[14px] font-medium">{props.price}원</p>
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
  );
}

export default Product;
