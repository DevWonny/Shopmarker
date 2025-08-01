/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { v4 } from 'uuid';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// store
import { useProduct } from '@/store/Product';
import { useAuth } from '@/store/Auth';
// utils
import convertCurrency from '@/utils/ConvertCurrency';
// style
import '@/styles/components/CartItem.scss';

// type
type CartProductItemProps = {
  item: ProductItemType;
};

export default function CartItem({ item }: CartProductItemProps) {
  const { removeCart } = useProduct();
  const [payment, setPayment] = useState<any>(null);
  const customerKey = v4();
  const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY as string;
  const { user } = useAuth();
  const AMOUNT = {
    currency: 'KRW',
    value: 10_000,
  };

  // function
  const onCartItemDelete = () => {
    const { id } = item;
    removeCart(id);
  };

  const onCartItemBuy = async () => {
    if (!user) {
      alert('로그인 후 시도해주시기 바랍니다.');
      // ! Router 추가
      return;
    }

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

  useEffect(() => {
    async function fetchPayment() {
      const tossPayments = await loadTossPayments(CLIENT_KEY);
      const payment = tossPayments.payment({ customerKey });
      setPayment(payment);
    }

    fetchPayment();
  }, [CLIENT_KEY]);

  return (
    <div className="cart-item flex items-center relative">
      <img src={item.image} alt="Cart Item Image" />
      <div className="info-container flex flex-col">
        <p className="title text-lg">{item.title}</p>
        <p className="description text-sm">{item.description}</p>
        <p className="price text-base">
          가격 : {convertCurrency(item.price, 'USD', 'KRW').toLocaleString()}원
        </p>
      </div>

      <div className="button-container absolute flex items-center ">
        <button className="cursor-pointer" onClick={onCartItemBuy}>
          Buy
        </button>
        <button className="cursor-pointer" onClick={onCartItemDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
