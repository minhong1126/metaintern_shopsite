import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import cartState from "../state/cartState";
import { IoIosArrowRoundBack } from "react-icons/io";
import CartProduct from "../components/cart/cartProduct";


function CartPage() {
  const nav = useNavigate();
  const cart = useRecoilValue(cartState);

  function goBack(){
    nav(-1);
  }

  return (
    <>
    <div className='h-[1000px] w-[430px] align-center'>
      <header className="flex items-center bg-black text-white h-[69px] w-full p-[31px]">
        <button onClick={goBack}>
          <IoIosArrowRoundBack className="w-[25px] h-[25px]"/>
        </button>
      </header>
      <div className="mt-[32px] ml-[22px]">
        <p className="text-[30px] font-extrabold"> 장바구니 </p>
        <p className="text-[16px]"> 현재 {cart.index.length}개의 상품이 담겨있습니다.</p>
      </div>
      <div>
        {Array.from({ length: cart.index.length }, (_, i) => (
          <CartProduct key={i} index={cart.index[i]} />
        ))}
      </div>
    </div>
    </>
  )
}

export default CartPage;
