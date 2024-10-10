import { useState } from "react";

// TypeScirpt 타입 설정
interface ProductOption{
  index: number;
  brand: string;
  explanation: string;
  price: number;
  total: number;
  setCartTotal: (total: number) => void;
}

function Product(props: ProductOption) {
  const [clicked, setClicked] = useState(false);

  // 장바구니 담긴 갯수 반환 - 이미 선택되어 있었을 때는 -1, 선택되어 있지 않았으면 +1
  function productClicked() {
    setClicked(!clicked);
    clicked ? (props.setCartTotal(props.total - 1)) : (props.setCartTotal(props.total + 1));
  }

  // 인덱스로 사진 가져오기
  const address = require(`../assets/img${props.index + 1}.png`);

  return (
    <>
      <div className="h-[247px] w-[184px] border border-[#F2F2F2] rounded-[15px] mt-[16px]">
        <img src={address} className="h-[115px] w-[184px] object-cover"/>
        <div className="p-[12px]">
          <h2 className="text-[16px] font-semibold"> {props.brand} </h2>
          <h4 className="text-[13px] text-[#7C7A7A]"> {props.explanation} </h4>
          <h3 className="text-[14px] font-bold mt-[8px]">{props.price}</h3>
          <button
            className={`mt-[10px] px-[12px] py-[6px] rounded-[5px] ${clicked ? 'bg-[#D8D8D8] text-black' : 'bg-black text-white'}`}
            onClick={productClicked}
          >
            {clicked ? '담김!' : '담기'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
