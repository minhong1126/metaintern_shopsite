import React from 'react';
import Cart from '../components/product/cart';
import Product from '../components/product/product';
import { useRecoilValue } from 'recoil';
import { cartState, productState } from "../state/state";

// MainPage.tsx
// 메인 화면입니다.
// 처음 들어갔을 때 나오며, 상품 목록이 나열되어 있습니다.
// 총 몇 개의 상품이 나열되어 있는지 표시됩니다.
// 상품 사진을 누르면 상품 상세 페이지로 이동합니다.
// 상품의 담기 버튼을 누르면 장바구니에 1개로 담기고, 다시 누르면 장바구니에서 제거됩니다.
// 상품의 구매 버튼을 누르면 장바구니에 1개 담긴 채 장바구니 창으로 이동합니다.
// 장바구니에 담긴 상품 개수 만큼 장바구니 버튼 위에 표시됩니다.

function MainPage() {
  const cartList = useRecoilValue(cartState);
  const productList = useRecoilValue(productState);

  return (
    <>
      <div className='h-[1000px] w-[430px] align-center'>
        <header className="flex justify-between items-center bg-black text-white h-[69px] w-full p-[31px]">
          <div className="ml-auto">
            {/* 장바구니 컴포넌트 */}
            <Cart />  
          </div>
        </header>
        <div className="flex flex-col p-[23px]">
          <div className="pt-[32px] pb-[23px]">
            <h1 className="font-bold"> 신발 상품 목록 </h1>
            <h5> 현재 {productList.priceList.length}개의 상품이 있습니다 </h5>
          </div>
          <div className="grid grid-cols-2 gap-[16px]">
            {/* 반복문으로 6개 생성 후 인덱스로 값을 보냄 */}
            {Array.from({ length: productList.brandList.length }, (_, i) => (
              // 상품 컴포넌트
              <Product 
                key={i}
                index={i}
                brand={productList.brandList[i]}
                explanation={productList.explainList[i % 2]}
                price={productList.priceList[i]}
                selected={cartList.index.includes(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
