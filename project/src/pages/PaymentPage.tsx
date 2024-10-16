import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function PaymentPage() {  
  const [isCard, setIsCard] = useState(false);
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
        <p className='h-[33px] w-[69px] mt-[20px] ml-[36px] text-[16px]'> 보유카드 </p>
        <button onClick={goBack}
          className='h-[36px] w-[36px] mt-[17px] ml-[17px]'>
          <IoIosClose className='h-[20px] w-[20px] '/>
        </button>
      </header>
      <div>
        <p className='flex justify-center mt-[86px] text-[14px] text-[#575757]'> 새로운 카드를 등록해주세요. </p>
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
