'use client';
// store
import { useProduct } from '@/store/Product';
// component
import CartItem from '@/components/cart/cartItem';

export default function Cart() {
  const { cart } = useProduct();

  return (
    <div className="card-wrap">
      <p>Card page</p>
      {cart &&
        cart.map(item => (
          <CartItem key={`cart-item-key-${item.id}`} item={item} />
        ))}
    </div>
  );
}
