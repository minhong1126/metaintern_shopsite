import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import LocalCard from "../components/payment/localCard";

// PaymentPage.tsx
// 결제 페이지입니다.
// localStorage에 등록된 카드가 있을 시 띄워주며 이 카드로 결제하는 버튼이 생성됩니다.
// + 버튼 클릭 시 카드 등록 페이지로 넘어갑니다.

function PaymentPage() {  
  const cardInfo = window.localStorage.getItem('cardInfo');
  console.log(cardInfo);
  const nav = useNavigate();

  function goBack(){
    nav(-1);
  }

  function gotoAddCard(){
    nav('/addCard');
  }

  return(
    <>
    <div className='h-[1000px] w-[430px] align-center'>
      <header className='flex justify-between'>
        <h5 className='h-[33px] w-[69px] mt-[20px] ml-[36px]'> 보유카드 </h5>
        <button onClick={goBack}
          className='h-[36px] w-[36px] mt-[17px] ml-[17px]'>
          <IoIosClose className='h-[20px] w-[20px] '/>
        </button>
      </header>
      <div className="mt-[22px]">
        { cardInfo ? (
          <>
            <LocalCard cardNum={cardInfo} />
          </>) : null}
      </div>
      <div className=" mt-[86px]">
        { cardInfo ? null : <h6 className='flex justify-center text-[#575757]'> 새로운 카드를 등록해주세요. </h6>}
        <div className='flex justify-center'>
          <button onClick={gotoAddCard} 
            className='flex justify-center items-center h-[123px] w-[208px] bg-[#E5E5E5] mt-[9px]'>
            <FaPlus />
          </button> 
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentPage;
