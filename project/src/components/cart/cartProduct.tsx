import { useRecoilValue } from "recoil";
import productState from "../../state/productState";

interface index{
  index: number;
}

function CartProduct({index}: index){
  const productList = useRecoilValue(productState);
  const address = require(`../../assets/product/img${index + 1}.png`);

  return(
    <>
    <div className="flex items-center h-[185px]">
      <div className="flex ml-[22px]">
        <img src={address} alt='상품사진' className="h-[138.68px] w-[146.68px] rounded-[30px]" />
        <div className="flex flex-col h-[121.2px] w-[191.13px] ml-[54.54px]">
          <p className="text-[16px]"> {productList.brandList[index]} </p>
          <p className="text-[24px] font-bold"> {productList.priceList[index]} 원 </p>
          <div className="flex mt-[24px]">
            <button> - </button>
            <p> 갯수 </p>
            <button> + </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartProduct;