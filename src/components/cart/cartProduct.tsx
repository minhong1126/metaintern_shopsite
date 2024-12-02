import { useRecoilState, useRecoilValue } from "recoil";
import { productState, cartState } from "../../state/state"

// cartProduct.tsx
// 장바구니 페이지의 상품 컴포넌트입니다.
// 상품의 사진, 브랜드, 가격이 표시되어 있습니다.
// + - 버튼으로 장바구니 내에서 개수 조정이 가능하고, 현재 몇 개가 담겼는지 확인 가능합니다.

interface Index {
  key: number;
  index: number;
}

function CartProduct({ index }: Index) {
  const productList = useRecoilValue(productState);
  const [cart, setCart] = useRecoilState(cartState);

  const productIndex = cart.index.indexOf(index);
  

  // 수량 감소
  function minusNum() {
    if (productIndex === -1) return; 

    setCart((prev) => {
      const updatedCounts = [...prev.cnt];
      if (updatedCounts[productIndex] > 1) {
        updatedCounts[productIndex] -= 1;
      } 
      else {
        const updatedIndexes = prev.index.filter((_, idx) => idx !== productIndex);
        const updatedCounts = prev.cnt.filter((_, idx) => idx !== productIndex);

        return {
          index: updatedIndexes,
          cnt: updatedCounts,
        };
      }

      return {
        index: prev.index,
        cnt: updatedCounts,
      };
    });
  }

  // 수량 증가
  function plusNum() {
    if (productIndex === -1) return; 

    setCart((prev) => {
      const updatedCounts = [...prev.cnt];
      updatedCounts[productIndex] += 1;

      return {
        index: prev.index,
        cnt: updatedCounts,
      };
    });
  }

  // 상품 이미지 경로 설정
  const address = require(`../../assets/product/img${index}.png`);

  return (
    <div className="flex items-center h-[185px] border-b-[1px] border-[#EBEBEB]">
      <div className="flex ml-[22px]">
        <img
          src={address}
          alt="상품사진"
          className="h-[138.68px] w-[146.68px] rounded-[30px]"
        />
        <div className="flex flex-col h-[121.2px] w-[191.13px] ml-[54.54px]">
          <h5> {productList.brandList[index]} </h5>
          <h2 className="font-bold"> {productList.priceList[index]} 원 </h2>
          <div className="flex mt-[24px]">
            <button onClick={minusNum} 
              className="flex justify-center items-center h-[24px] w-[24px] bg-[#83838333] rounded-[10px]"> - </button>
            <h5 className="mx-[17px]"> {productIndex !== -1 ? cart.cnt[productIndex] : 0} </h5>
            <button onClick={plusNum}
              className="flex justify-center items-center h-[24px] w-[24px] bg-[#83838333] rounded-[10px]"> + </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
