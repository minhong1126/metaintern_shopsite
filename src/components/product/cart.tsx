import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../../state/state";

// cart.tsx
// header의 장바구니 버튼 컴포넌트 입니다.
// 장바구니에 담긴 물건의 종류 만큼 장바구니 버튼 위에 숫자가 표시됩니다.

function Cart(){
  const cartTotal = useRecoilValue(cartState);
  const nav = useNavigate();

  function gotoCart(){
    nav('/cart');
  }
  
  return(
    <button className="h-[24px] w-[20px]" >
      <MdOutlineShoppingBag className="h-[24px] w-[20px]" onClick={gotoCart}/>
      { cartTotal.index.length === 0 ? null : (
        <span className="absolute bg-white text-black rounded-full h-[19px] w-[19px] top-[15px]">
          {cartTotal.index.length}
        </span>
      )} 
    </button>
  );
}

export default Cart;