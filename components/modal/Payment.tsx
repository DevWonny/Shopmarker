/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

export default function Payment() {
  const [amount, setAmount] = useState({
    currency: 'KRW',
    value: 50_000,
  });
  const [widgets, setWidgets] = useState<any>(null);
  const customerKey = v4();
  const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY as string;

  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments(CLIENT_KEY);
      const widgets = tossPayments.payment({ customerKey });
      setWidgets(widgets);
    }
    fetchPaymentWidgets();
  }, [CLIENT_KEY]);

  const onPaymentClick = async () => {
    try {
      await widgets.requestPayment({
        method: 'CARD',
        amount,
        orderId: 'HONwhqIqQj5vniCstdVNp',
        orderName: '토스 티셔츠 외 2건',
        successUrl: window.location.origin + '/success',
        failUrl: window.location.origin + '/fail',
        customerEmail: 'customer123@gmail.com',
        customerName: '김토스',
        customerMobilePhone: '01012341234',
      });
    } catch (err) {
      console.error('결제 실패 : ', err);
    }
  };
  return <button onClick={onPaymentClick}>결제하기</button>;
}
