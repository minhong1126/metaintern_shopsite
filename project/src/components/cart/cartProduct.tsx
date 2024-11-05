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
    <div className="flex h-[185px]">
      <div>
        <img src={address} alt='상품사진' className="h-[138.68px] w-[146.68px]" />
        <div>
          <p> {productList.brandList[index]} </p>
          <p> {productList.priceList[index]} </p>
          <div className="flex">
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