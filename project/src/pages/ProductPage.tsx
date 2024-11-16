import React from 'react';
import Cart from '../components/product/cart';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function ProductPage() {
  const nav = useNavigate();

  function goBack(){
    nav(-1);
  }

  return (
    <>
    <div className='h-[1000px] w-[430px] align-center'>
      <header className="flex items-center bg-black text-white h-[69px] w-full p-[31px]">
        <div className='flex justify-between'>
          <button onClick={goBack}>
            <IoIosArrowRoundBack className="w-[25px] h-[25px] mr-[330px]"/>
          </button>
          <div>
            {/* 장바구니 컴포넌트 */}
            <Cart />  
          </div>
        </div>
      </header>
      <div>
        <img src='' alt='상품 사진' className='w-[381px] h-[441px] rounded' />
      </div>
    </div>
    </>
  );
}

export default ProductPage;
