'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
// store
import { useProduct } from '@/store/Product';
// component
import CartItem from '@/components/cart/cartItem';

export default function Cart() {
  const { cart } = useProduct();
  const router = useRouter();
  // useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        router.replace('/');
      }
    });

    return () => unsubscribe();
  }, []);
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
