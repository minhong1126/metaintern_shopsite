import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosClose } from "react-icons/io";

function AddCardPage() {
  const nav = useNavigate();
  function goBack(){
    nav(-1);
  }

  return(
    <>
    <div className='h-[1000px] w-[430px] '>
      <header className='flex justify-between mt-[22px]'>
        <div className='flex justify-center items-center ml-[24.36px]'>
          <button onClick={goBack} className='h-[28px] w-[28px]'>
            <IoIosArrowBack />
          </button>
          <p className='flex items-center'> 카드 추가 </p>
        </div>
        <button onClick={goBack}
          className='flex h-[36px] w-[36px] justify-center items-center'>
          <IoIosClose className='h-[20px] w-[20px] '/>
        </button>
      </header>
      <div className='flex justify-center items-center mt-[29px]'>
        <img src='../assets/payment/card.png' className='h-[133px] w-[213px]' />
      </div>
    </div>
    </>
  )
}

export default AddCardPage;
