/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect } from 'react';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// store
import { useProduct } from '@/store/Product';
// utils
import convertCurrency from '@/utils/ConvertCurrency';
// style
import '@/styles/components/CartItem.scss';

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

  const onCartItemBuy = () => {
    console.log('Buy!');
  };

  useEffect(() => {
    console.log('🚀 ~ onCartItemDelete ~ item:', item);
  }, []);

  return (
    <div className="cart-item flex items-center relative">
      <img src={item.image} alt="Cart Item Image" />
      <div className="info-container">
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{convertCurrency(item.price, 'USD', 'KRW').toLocaleString()}</p>
      </div>

      <div className="button-container absolute flex items-center">
        <button onClick={onCartItemBuy}>Buy</button>
        <button onClick={onCartItemDelete}>Delete</button>
      </div>
    </div>
  );
}
