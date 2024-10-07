import React, { useState } from 'react';
import Cart from './components/cart';
import Product from './components/product';
import './App.css';

const brandList = ["브랜드A", "브랜드A", "브랜드B", "브랜드B", "브랜드C", "브랜드C"];
const priceList = [35000, 25000, 35000, 35000, 35000, 35000];
const explainList = ["편안하고 착용감이 좋은 신발", "힙한 컬러가 매력적인 신발"];

function App() {
  const [total, setTotal] = useState(0);

  function setCartTotal(totalNum: number) {
    setTotal(totalNum);
  }

  return (
    <>
      <div className='h-[1000px] w-[430px] align-center'>
        <header className="flex justify-between items-center bg-black text-white h-[69px] w-full p-[31px]">
          <div className="ml-auto">
            <Cart total={total} />
          </div>
        </header>
        <div className="flex flex-col h-full p-[23px]">
          <div className="pt-[32px] pb-[7px]">
            <h1 className="font-bold text-[30px]">신발 상품 목록</h1>
            <h4 className='text-[16px]'>현재 {priceList.length}개의 상품이 있습니다</h4>
          </div>
          <div className="grid grid-cols-2 gap-[16px]">
            {Array.from({ length: 6 }, (_, i) => (
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
