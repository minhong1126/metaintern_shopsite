import { MdOutlineShoppingBag } from "react-icons/md";

interface totalNum{
  total: number;
}

function Cart(props: totalNum){
  return(
    <button>
      <MdOutlineShoppingBag  className="h-[24px] w-[20px]" />
      { props.total === 0 ? null : (
        <span className="absolute bg-white text-black rounded-full h-[19px] w-[19px] top-[15px]">
          {props.total}
        </span>
      )} 
    </button>
  );
}

export default Cart;