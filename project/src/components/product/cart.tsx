import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface totalNum{
  total: number;
}

function Cart(props: totalNum){
  const nav = useNavigate();
  function gotoCart(){
    nav('/cart');
  }
  
  return(
    <button>
      <MdOutlineShoppingBag  className="h-[24px] w-[20px]" onClick={gotoCart}/>
      { props.total === 0 ? null : (
        <span className="absolute bg-white text-black rounded-full h-[19px] w-[19px] top-[15px]">
          {props.total}
        </span>
      )} 
    </button>
  );
}

export default Cart;