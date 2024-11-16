import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState, productState } from "../state/state";
import CartProduct from "../components/cart/cartProduct";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";


function CartPage() {
  const nav = useNavigate();
  const cart = useRecoilValue(cartState);
  const productList = useRecoilValue(productState);
  const [total, setTotal] = useState(0);
  const [deliver, setDeliver] = useState(0);

  useEffect(() => {
    function getTotal(){
      let price = 0;
      cart.index.forEach((i, idx) => {
        const product = productList.priceList[i];
        const quantity = cart.cnt[idx]; 

        if (product && quantity) {
          price += product * quantity;
        }
        setTotal(price);
      });

      if(price >= 100000){
        setDeliver(0);
      }
      else{
        setDeliver(3000);
      }
    }
    getTotal();
  }, [cart, productList]);

  function goBack(){
    nav(-1);
  }

  function gotoPayment(){
    nav('/pay');
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
      <div className="flex flex-col font-bold mt-[21px] ml-[21px] mr-[32px] border-b-[1px] border-[#EBEBEB]">
        <div className="flex justify-between h-[24px]">
          <p className="text-[16px]"> 상품 금액 </p>
          <p className="text-[24px]"> {total}원 </p>
        </div>
        <div className="flex justify-between h-[24px] mb-[21px]">
          <p className="text-[16px]"> 배송비 </p>
          <p className="text-[24px]"> {deliver}원 </p>
        </div>
      </div>
      <div className="flex font-bold justify-between mt-[21.5px] ml-[21px] mr-[32px]">
        <p className="text-[16px]"> 총 급액 </p>
        <p className="text-[24px]"> {deliver + total}원 </p>
      </div>
      <button 
        className="flex w-[385px] h-[58px] mt-[43px] ml-[21px] items-center justify-center bg-[#393939] text-white rounded-full"
        onClick={gotoPayment}> 
          결제하기 
      </button>
    </div>
    </>
  )
}

export default CartPage;
