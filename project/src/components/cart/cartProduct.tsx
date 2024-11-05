import { useRecoilState, useRecoilValue } from "recoil";
import productState from "../../state/productState";
import cartState from "../../state/cartState";

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
      } else {
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
  const address = require(`../../assets/product/img${index + 1}.png`);

  return (
    <div className="flex items-center h-[185px] border-b-[1px] border-[#EBEBEB]">
      <div className="flex ml-[22px]">
        <img
          src={address}
          alt="상품사진"
          className="h-[138.68px] w-[146.68px] rounded-[30px]"
        />
        <div className="flex flex-col h-[121.2px] w-[191.13px] ml-[54.54px]">
          <p className="text-[16px]"> {productList.brandList[index]} </p>
          <p className="text-[24px] font-bold"> {productList.priceList[index]} 원 </p>
          <div className="flex mt-[24px]">
            <button onClick={minusNum} 
              className="flex justify-center items-center h-[24px] w-[24px] bg-[#83838333] rounded-[10px]"> - </button>
            <p className="mx-[17px]"> {productIndex !== -1 ? cart.cnt[productIndex] : 0} </p>
            <button onClick={plusNum}
              className="flex justify-center items-center h-[24px] w-[24px] bg-[#83838333] rounded-[10px]"> + </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
