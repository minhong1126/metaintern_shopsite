import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";

interface CardInfo {
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

const Input = styled.input`
  background-color: #ECEBF1;
  height: 45px;
  border-radius: 7px;
  justify-content: center;
  text-align: center;
  margin-bottom: 19px;
  margin-top: 3px;
`;

const P = styled.p`
  font-size: 12px;
`;

function AddCardPage() {
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
        ...prev, due: {
          ...prev.due, year: value ? Number(value) : undefined }
        }));
    } else if (name === 'month') {
      setCardInfo((prev) => ({ 
        ...prev, due: {
          ...prev.due, month: value ? Number(value) : undefined }
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
      (cardInfo.cardNum !== undefined ) &&
      cardInfo.due !== undefined &&
      cardInfo.name !== undefined &&
      cardInfo.code !== undefined &&
      cardInfo.pw?.pw1 !== undefined &&
      cardInfo.pw?.pw2 !== undefined
    );
  };

  const handleSave = () => {
    localStorage.setItem('cardInfo', JSON.stringify(cardInfo));
    nav(-1);
  };

  return (
    <>
      <div className='h-[1000px] w-[430px]'>
        <header className='flex justify-between mt-[22px]'>
          <div className='flex justify-center items-center ml-[24.36px]'>
            <button onClick={goBack} className='h-[28px] w-[28px]'>
              <IoIosArrowBack />
            </button>
            <p className='flex items-center'> 카드 추가 </p>
          </div>
          <button onClick={goBack} className='flex h-[36px] w-[36px] justify-center items-center'>
            <IoIosClose className='h-[20px] w-[20px]' />
          </button>
        </header>
        <div className='flex justify-center items-center mt-[29px]'>
          <img src='../assets/payment/card.png' className='h-[133px] w-[213px]' />
        </div>
        <div className='ml-[28px] mt-[25px]'>
          <div>
            <P> 카드 번호 </P>
            <Input 
              className='w-[318px]'
              type='number' 
              name='cardNum' 
              value={cardInfo.cardNum ?? ''}
              onChange={handleChange} 
            />
          </div>
          <div>
            <P> 만료일 </P>
            <div className='flex'>
              <Input
                className='w-[63px]'
                type='number' 
                name='year' 
                value={cardInfo.due?.year ?? ''} 
                onChange={handleChange} 
                placeholder='YY' 
              />
              <span className='mx-2'>/</span>
              <Input 
                className='w-[63px]'
                type='number' 
                name='month' 
                value={cardInfo.due?.month ?? ''}
                onChange={handleChange} 
                placeholder='MM' 
              />
            </div>
          </div>
          <div>
            <P> 카드 소유자 이름</P>
            <Input
              className='w-[318px]'
              type='text' 
              name='name' 
              value={cardInfo.name ?? ''}
              onChange={handleChange} 
            />
          </div>
          <div>
            <P> 보안 코드 </P>
            <Input 
              className='w-[84px]'
              type='password' 
              name='code' 
              value={cardInfo.code ?? ''}
              onChange={handleChange} 
            />
          </div>
          <div>
            <P> 카드 비밀번호 </P>
            <div className='flex items-center'>
              <Input 
                className='w-[43px]'
                type='password' 
                name='pw1' 
                value={cardInfo.pw?.pw1 ?? ''} 
                onChange={handleChange} 
              />
              <Input 
                className='w-[43px]'
                type='password' 
                name='pw2' 
                value={cardInfo.pw?.pw2 ?? ''} 
                onChange={handleChange} 
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
                className='flex w-[317px] h-[40px] items-center justify-center bg-black text-white rounded-full'>
                  저장하기 
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCardPage;
