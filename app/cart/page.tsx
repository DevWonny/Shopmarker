'use client';
// store
import { useProduct } from '@/store/Product';

export default function Cart() {
  const { cart } = useProduct();

  return (
    <div className="card-wrap">
      <p>Card page</p>
      {cart &&
        cart.map(item => (
          <div className="cart-item" key={`cart-page-item-${item.id}`}>
            {item.title}
          </div>
        ))}
    </div>
  );
}
