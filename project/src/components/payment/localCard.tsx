interface cardInfo {
  cardNum: string;
}

function LocalCard({ cardNum }: cardInfo) {
  const cardImg = require(`../../assets/payment/card.png`);
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
                <button className="flex w-[213px] h-[30px] mt-[13px] items-center justify-center bg-[#FFEF64] text-[10px] rounded-full">
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
