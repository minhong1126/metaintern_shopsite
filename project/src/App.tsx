import React, { useState } from 'react';
import Cart from './components/cart';
import Product from './components/product';
import './App.css';

// <태그 className='' -> TailwindCss
// interface {}, 파라미터 -> Typescript
// 형식이라 무시하셔도 됩니다! 나머지는 React로 작성했어요!

// 상품 정보 리스트
const brandList = ["브랜드A", "브랜드A", "브랜드B", "브랜드B", "브랜드C", "브랜드C"];
const priceList = [35000, 25000, 35000, 35000, 35000, 35000];
const explainList = ["편안하고 착용감 좋은 신발", "힙한 컬러가 매력적인 신발"];

function App() {
  const [total, setTotal] = useState(0);

  // 장바구니 담긴 갯수 업데이트
  function setCartTotal(totalNum: number) {
    setTotal(totalNum);
  }

  return (
    <>
      <div className='h-[1000px] w-[430px] align-center'>
        <header className="flex justify-between items-center bg-black text-white h-[69px] w-full p-[31px]">
          <div className="ml-auto">
            {/* 장바구니 컴포넌트 */}
            <Cart total={total} />  
          </div>
        </header>
        <div className="flex flex-col p-[23px]">
          <div className="pt-[32px] pb-[23px]">
            <p className="font-bold text-[30px]">신발 상품 목록</p>
            <p className='text-[16px]'>현재 {priceList.length}개의 상품이 있습니다</p>
          </div>
          <div className="grid grid-cols-2 gap-[16px]">
            {/* 반복문으로 6개 생성 후 인덱스로 값을 보냄 */}
            {Array.from({ length: 6 }, (_, i) => (
              // 상품 컴포넌트
              <Product 
                key={i}
                index={i}
                brand={brandList[i]}
                explanation={explainList[i % 2]}
                price={priceList[i]} 
                total={total}
                setCartTotal={setCartTotal}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
