/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// style
import '@/styles/components/ProductItem.scss';

type ProductItemProps = {
  item: ProductItemType;
};

// interface
interface ExchangeRateMap {
  [currencyCode: string]: number;
}

// ! props : item -> type check 필요
export default function ProductItem({ item }: ProductItemProps) {
  // state
  const [isMouseOver, setIsMouseOver] = useState(false);

  // rates
  const rates = {
    KRW: 1389.43,
    USD: 1,
  };

  // function
  const onItemClick = (id: number) => {
    // ! Click 시 페이지 전환 예정
    console.log('Id : ', id);
  };

  const onMouseOver = (id: number) => {
    if (item.id === id) {
      setIsMouseOver(true);
    } else {
      setIsMouseOver(false);
    }
  };

  /**
   * 환율 계산 함수
   * @params price 가격(number)
   * @params fromCurrency 기준 통화(USD)
   * @params toCurrency 대상 통화(KRW)
   * @params rates 환율 정보 객체
   * @params returns 변환된 금액
   */
  const convertCurrency = (
    price: number,
    fromCurrency: string,
    toCurrency: string,
    rates: ExchangeRateMap
  ): number => {
    if (fromCurrency === toCurrency) return price;
    const baseToUSD = fromCurrency === 'USD' ? 1 : 1 / rates[fromCurrency];
    const USDToTarget = toCurrency === 'USD' ? 1 : rates[toCurrency];

    return Math.floor(price * baseToUSD * USDToTarget);
  };

  return (
    <div
      className="product-item-container flex flex-col justify-between relative"
      onClick={() => onItemClick(item.id)}
      onMouseOver={() => onMouseOver(item.id)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <img src={item.image} alt="Product Image" />
      {isMouseOver && (
        <div className="desc-container absolute">
          <p className="title">{item.title}</p>
          <p className="rating">평점 : {item.rating.rate}</p>
          <p className="price">
            가격 : {convertCurrency(item.price, 'USD', 'KRW', rates)}원
          </p>
        </div>
      )}
    </div>
  );
}
