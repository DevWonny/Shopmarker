/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
// store
import { useProduct } from '@/store/Product';
// style
import '@/styles/components/modal/Detail.scss';

export default function Detail() {
  const AMOUNT = {
    currency: 'KRW',
    value: 10_000,
  };
  const [payment, setPayment] = useState<any>(null);
  const customerKey = v4();
  const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY as string;
  const { item } = useProduct();

  useEffect(() => {
    async function fetchPayment() {
      const tossPayments = await loadTossPayments(CLIENT_KEY);
      const payment = tossPayments.payment({ customerKey });
      setPayment(payment);
    }

    fetchPayment();
  }, [CLIENT_KEY]);

  // function
  const onBuyClick = async () => {
    try {
      await payment.requestPayment({
        method: 'CARD',
        amount: AMOUNT,
        orderId: 'HONwhqIqQj5vniCstdVNp',
        orderName: '토스 티셔츠 외 2건',
        successUrl: window.location.origin + '/success',
        failUrl: window.location.origin + '/fail',
        customerEmail: 'customer123@gmail.com',
        customerName: '김토스',
        customerMobilePhone: '01012341234',
      });
    } catch (err) {
      console.log('결제 실패 : ', err);
    }
  };

  return (
    item && (
      <div className="detail-container flex ">
        <img src={item.image} alt="Detail Image" />
        <div className="description-container flex flex-col">
          <h1 className="detail-title text-lg">{item.title}</h1>
          <p className="detail-rate text-sm">Rate : {item.rating.rate}</p>
          <p className="detail-price text-sm">Price : {item.price}</p>
          <p className="detail-description ">{item.description}</p>

          <div className="button-container flex">
            <button>Cart</button>
            <button onClick={onBuyClick}>Buy</button>
          </div>
        </div>
      </div>
    )
  );
}
