/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect } from 'react';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// store
import { useProduct } from '@/store/Product';
// utils
import convertCurrency from '@/utils/ConvertCurrency';

// type
type CartProductItemProps = {
  item: ProductItemType;
};

export default function CartItem({ item }: CartProductItemProps) {
  const { cart, setCart } = useProduct();

  // function
  const onCartItemDelete = () => {
    const { id } = item;
    setCart(cart.filter(item => item.id !== id));
  };

  useEffect(() => {
    console.log('🚀 ~ onCartItemDelete ~ item:', item);
  }, []);

  return (
    <div className="cart-item">
      <img src={item.image} alt="Cart Item Image" />
      <p>{item.title}</p>
      <p>{convertCurrency(item.price, 'USD', 'KRW').toLocaleString()}</p>

      <button onClick={onCartItemDelete}>Delete</button>
    </div>
  );
}
