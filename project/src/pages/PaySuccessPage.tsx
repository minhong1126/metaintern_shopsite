import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, productState } from "../state/state";
import { useState, useEffect } from "react";

function PaySuccessPage() {
  const nav = useNavigate();
  const [cart, setCart] = useRecoilState(cartState);
  const productList = useRecoilValue(productState);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function getTotal(){
      let price = 0;
      cart.index.forEach((i, idx) => {
        const product = productList.priceList[i];
        const quantity = cart.cnt[idx]; 

        if (product && quantity) {
          price += product * quantity;
        }
      });
      if(price < 100000){
        price += 3000;
      }
      setTotal(price);
    }
    getTotal();
  }, []);

  function emptyCart(){
    setCart({
      index: [],
      cnt: [],
    })
  }

  function gotoCart(){
    emptyCart();
    nav('/cart');
  }

  return (
    <>
    <div className='h-[1000px] w-[430px]'>
      <header className="flex items-center justify-center bg-black text-white h-[69px] w-full p-[31px]" />
      <div className="flex flex-col align-center items-center mt-[291px]">
        <div className="flex flex-col items-center">
          <p className="font-extrabold text-[30px]"> 결제 완료! </p>
          <p className="mt-[7px]"> 총 {cart.index.length}개의 상품을 구매하셨습니다. </p>
        </div>
        <div className="flex flex-col items-center mt-[18px]">
          <p className="font-bold"> 총 결제 금액 </p>
          <p className="font-bold text-[24px] mt-[9px]"> {total}원 </p>
        </div>
        <div className="mt-[33px]">
          <button 
            className="flex w-[385px] h-[58px] mt-[13px] items-center justify-center bg-[#FFEF64] text-[20px] font-normal rounded-full"
            onClick={gotoCart}>
            상품 목록 보기
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PaySuccessPage;
