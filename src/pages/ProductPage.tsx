import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productState, cartState } from '../state/state';

function ProductPage() {
  const nav = useNavigate();
  const { index } = useParams<{ index: string }>();
  const idx = Number(index); 
  const productList = useRecoilValue(productState);  
  const [cart, setCart] = useRecoilState(cartState);
  const [num, setNum] = useState(0);  
  const address = require(`../assets/product/img${idx}.png`);
  const productIndex = cart.index.indexOf(idx);

  useEffect(() => {
    if(cart.index.includes(idx)){
      setNum(cart.cnt[productIndex]);
    }
    else{
      setNum(0);
    }
  }, [cart.cnt, cart.index, idx, productIndex])

  // 뒤로 가기
  function goBack() {
    nav(-1);
  }

  // 수량 감소
  function minusNum() {
    if (productIndex !== -1) {
      const updatedCounts = [...cart.cnt];
      if (updatedCounts[productIndex] === 1) {
        updatedCounts.splice(productIndex, 1);
        const updatedIndexes = cart.index.filter((_, i) => i !== productIndex);

        setCart({
          index: updatedIndexes,
          cnt: updatedCounts,
        });
      } else {
        updatedCounts[productIndex] -= 1;
        setCart({
          index: cart.index,
          cnt: updatedCounts,
        });
      }
    }
  }

  // 수량 증가
  function plusNum() {
    if (productIndex !== -1) {
      const updatedCounts = [...cart.cnt];
      updatedCounts[productIndex] += 1;
      setCart({
        index: cart.index,
        cnt: updatedCounts,
      });
    } else {
      setCart({
        index: [...cart.index, idx],
        cnt: [...cart.cnt, 1],  
      });
    }
  }

  return (
    <>
      <div className='h-[1000px] w-[430px] align-center'>
        <header className="flex items-center bg-black text-white h-[69px] w-full p-[31px]">
          <div className='flex justify-between'>
            <button onClick={goBack}>
              <IoIosArrowRoundBack className="w-[25px] h-[25px] mr-[330px]" />
            </button>
          </div>
        </header>
        <div className='mt-[36px]'>
          <div className='ml-[24px]'>
            <img src={address} alt='상품 사진' className='w-[381px] h-[441px] rounded-[20px]' />
          </div>
          <div className='flex mt-[36px] ml-[38px]'>
            <div>
              <h1 className='font-extrabold'> {productList.brandList[idx]} </h1>
              <h5> {productList.explainList[idx]} </h5>
              <h4 className='font-medium'> {productList.priceList[idx]} 원 </h4>
            </div>
            <div className="flex items-center mt-[22px] ml-[47px] h-[30px] w-[110px]">
              <button
                onClick={minusNum}
                className="flex justify-center items-center h-[24px] w-[24px] bg-[#83838333] rounded-[10px]"> 
                - 
              </button>
              <h5 className="mx-[17px]"> {num} </h5>
              <button
                onClick={plusNum}
                className="flex justify-center items-center h-[24px] w-[24px] bg-[#83838333] rounded-[10px]"> 
                + 
              </button>
            </div>
          </div>
          <div>
            <button
              className='flex w-[375px] h-[60px] m-[30px] items-center justify-center bg-black text-white rounded-full'
              onClick={plusNum}>
              장바구니 담기
            </button>
          </div>
          <div className='ml-[38px]'>
            <h3 className='font-extrabold'> 관련 상품 </h3>
            <h5> 브랜드의 다른 신발은 어떠신가요? </h5>
            <div className='flex'>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
