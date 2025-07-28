/* eslint-disable @next/next/no-img-element */
'use client';
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
