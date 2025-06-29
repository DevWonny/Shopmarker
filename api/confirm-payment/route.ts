import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { paymentKey, orderId, amount } = await req.json();
  console.log(2);
  const secretKey = process.env.TOSSPAYMENTS_SECRET_KEY;
  const encode = Buffer.from(`${secretKey}:`).toString('base64');

  try {
    const res = await fetch(
      'https://api.tosspayments.com/v1/payments/confirm',
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encode}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentKey, orderId, amount }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ data, status: res.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: err, code: '결제 승인 실패.' },
      { status: 500 }
    );
  }
}
