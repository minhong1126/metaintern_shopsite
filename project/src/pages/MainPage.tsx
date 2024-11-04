import React, { useState } from 'react';
import Cart from '../components/product/cart';
import Product from '../components/product/product';
import { useRecoilState } from 'recoil';
import productState from '../atoms/productState';
import cartState from '../atoms/cartState';

// <태그 className='' -> TailwindCss
// interface {}, 파라미터 -> Typescript
// 형식이라 무시하셔도 됩니다! 나머지는 React로 작성했어요!

function MainPage() {
  const [cartList] = useRecoilState(cartState);
  const [total, setTotal] = useState(0);
  const [productList] = useRecoilState(productState);

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
            <p className='text-[16px]'>현재 {productList.priceList.length}개의 상품이 있습니다</p>
          </div>
          <div className="grid grid-cols-2 gap-[16px]">
            {/* 반복문으로 6개 생성 후 인덱스로 값을 보냄 */}
            {Array.from({ length: 6 }, (_, i) => (
              // 상품 컴포넌트
              <Product 
                key={i}
                index={i}
                brand={productList.brandList[i]}
                explanation={productList.explainList[i % 2]}
                price={productList.priceList[i]} 
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

export default MainPage;
