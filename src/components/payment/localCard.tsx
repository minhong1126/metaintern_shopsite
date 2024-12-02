import { useNavigate } from "react-router-dom";

// localCard.tsx
// 기존에 등록한 카드가 있을 때 보여지는 카드 컴포넌트입니다.
// 이 카드로 결제하기 버튼 클릭 시 바로 PaymentSuccessPage로 넘어갑니다.

interface cardInfo {
  cardNum: string;
}

function LocalCard({ cardNum }: cardInfo) {
  const nav = useNavigate();
  const cardImg = require(`../../assets/payment/card.png`);
  function gotoPaySuccess(){
    nav('/paySuccess');
  }
  return (
    <>
      <div>
        {cardNum ? (
          <>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={cardImg} alt="카드"/>
              </div>
              <div>
                <button 
                  className="flex w-[213px] h-[30px] mt-[13px] items-center justify-center bg-[#FFEF64] text-[10px] rounded-full"
                  onClick={gotoPaySuccess}>
                  이 카드로 결제하기
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default LocalCard;
