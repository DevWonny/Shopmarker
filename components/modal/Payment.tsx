/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { loadTossPayments, ANONYMOUS } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';

// declare global {
//   interface Window {
//     TossPayment: any;
//   }
// }

export default function Payment() {
  const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY;
  const [widgets, setWidgets] = useState<any>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments(CLIENT_KEY as string);
      // 비회원 결제
      const widget = tossPayments.widgets({ customerKey: ANONYMOUS });

      setWidgets(widget);
    }

    fetchPaymentWidgets();
  }, [CLIENT_KEY]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets === null) {
        return;
      }

      // 결제 금액 설정
      await widgets.setAmount({ currency: 'KRW', value: 50_000 });
      await Promise.all([
        // 결제 UI 렌더링
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),
        // 이용약관 UI 렌더링
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ]);
      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);
  return (
    <div className="payment-container">
      <div className="cursor-pointer">test</div>
    </div>
  );
}
