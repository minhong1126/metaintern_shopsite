import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const nav = useNavigate();
  const cnt = 0;
  
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
        <p className="text-[16px]"> 현재 {cnt}개의 상품이 담겨있습니다.</p>
      </div>
      <div>
        {/* {cnt ? } */}
      </div>
    </div>
    </>
  )
}

export default CartPage;
