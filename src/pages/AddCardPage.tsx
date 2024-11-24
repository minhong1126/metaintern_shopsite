import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";
import Input from '../components/addCard/input';

class CardInfo {
  cardNum?: number;
  due?: {
    year?: number,
    month?: number,
  }
  name?: string;
  code?: number;
  pw?: {
    pw1?: number;
    pw2?: number;
  };
}

function AddCardPage() {
  const cardImg = require('../assets/payment/card.png');
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNum: undefined,
    due: {
      year: undefined,
      month: undefined,
    },
    name: undefined,
    code: undefined,
    pw: {
      pw1: undefined,
      pw2: undefined,
    }
  });

  const nav = useNavigate();
  
  function goBack() {
    nav(-1);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'cardNum') {
      setCardInfo((prev) => ({ ...prev, cardNum: value ? Number(value) : undefined }));
    } else if (name === 'year') {
      setCardInfo((prev) => ({ 
        ...prev, due: { ...prev.due, year: value ? Number(value) : undefined }
      }));
    } else if (name === 'month') {
      setCardInfo((prev) => ({ 
        ...prev, due: { ...prev.due, month: value ? Number(value) : undefined }
      }));
    } else if (name === 'name') {
      setCardInfo((prev) => ({ ...prev, name: value || undefined }));
    } else if (name === 'code') {
      setCardInfo((prev) => ({ ...prev, code: value ? Number(value) : undefined }));
    } else if (name === 'pw1') {
      setCardInfo((prev) => ({
        ...prev,
        pw: { ...prev.pw, pw1: value ? Number(value) : undefined },
      }));
    } else if (name === 'pw2') {
      setCardInfo((prev) => ({
        ...prev,
        pw: { ...prev.pw, pw2: value ? Number(value) : undefined },
      }));
    }
  };

  const isFormComplete = () => {
    return (
      cardInfo.cardNum !== undefined &&
      cardInfo.due !== undefined &&
      cardInfo.name !== undefined &&
      cardInfo.code !== undefined &&
      cardInfo.pw?.pw1 !== undefined &&
      cardInfo.pw?.pw2 !== undefined
    );
  };

  const handleSave = () => {
    window.localStorage.setItem('cardInfo', JSON.stringify(cardInfo));
    nav(-1);
  };

  return (
    <div className='h-[1000px] w-[430px]'>
      <header className='flex justify-between mt-[22px]'>
        <div className='flex justify-center items-center ml-[24.36px]'>
          <button onClick={goBack} className='h-[28px] w-[28px]'>
            <IoIosArrowBack />
          </button>
          <h4 className='flex items-center'> 카드 추가 </h4>
        </div>
        <button onClick={goBack} className='flex h-[36px] w-[36px] justify-center items-center'>
          <IoIosClose className='h-[20px] w-[20px]' />
        </button>
      </header>
      <div className='flex justify-center items-center mt-[29px]'>
        <img src={cardImg} alt='카드 사진' className='h-[133px] w-[213px]' />
      </div>
      <div className='ml-[28px] mt-[25px]'>
        <div>
          <p className='text-[12px] text-[#525252]'> 카드 번호 </p>
          <Input 
            className='w-[318px]'
            type='number' 
            name='cardNum' 
            value={cardInfo.cardNum ?? ''}
            onChange={handleChange} 
            maxLength={16}
          />
        </div>
        <div>
          <p className='text-[12px] text-[#525252]'> 만료일 </p>
          <div className='flex'>
            <Input
              className='w-[63px]'
              type='number' 
              name='year' 
              value={cardInfo.due?.year ?? ''} 
              onChange={handleChange} 
              placeholder='YY' 
              maxLength={2}
            />
            <span className='mx-2'>/</span>
            <Input 
              className='w-[63px]'
              type='number' 
              name='month' 
              value={cardInfo.due?.month ?? ''}
              onChange={handleChange} 
              placeholder='MM' 
              maxLength={2}
            />
          </div>
        </div>
        <div>
          <p className='text-[12px] text-[#525252]'> 카드 소유자 이름</p>
          <Input
            className='w-[318px]'
            type='text' 
            name='name' 
            value={cardInfo.name ?? ''}
            onChange={handleChange} 
            maxLength={30} 
          />
        </div>
        <div>
          <p className='text-[12px] text-[#525252]'> 보안 코드 </p>
          <Input 
            className='w-[84px]'
            type='password' 
            name='code' 
            value={cardInfo.code ?? ''}
            onChange={handleChange} 
            maxLength={3} 
          />
        </div>
        <div>
          <p className='text-[12px] text-[#525252]'> 카드 비밀번호 </p>
          <div className='flex items-center'>
            <Input 
              className='w-[43px]'
              type='password' 
              name='pw1' 
              value={cardInfo.pw?.pw1 ?? ''} 
              onChange={handleChange} 
              maxLength={1}
            />
            <Input 
              className='w-[43px]'
              type='password' 
              name='pw2' 
              value={cardInfo.pw?.pw2 ?? ''} 
              onChange={handleChange} 
              maxLength={1} 
            />
            <div className='flex w-[43px] h-[45px] justify-center items-center'>
              <GoDotFill />
            </div>
            <div className='flex w-[43px] h-[45px] justify-center items-center'>
              <GoDotFill />
            </div>
          </div>
        </div>
        <div>
          {isFormComplete() && (
            <button onClick={handleSave} 
              className='flex w-[317px] h-[40px] mt-[9px] items-center justify-center bg-black text-white rounded-full'>
                저장하기 
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddCardPage;
