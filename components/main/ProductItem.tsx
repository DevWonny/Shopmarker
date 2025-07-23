/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
// store
import { useProduct } from '@/store/Product';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// utils
import convertCurrency from '@/utils/ConvertCurrency';
// style
import '@/styles/components/ProductItem.scss';

type ProductItemProps = {
  item: ProductItemType;
};

// ! props : item -> type check 필요
export default function ProductItem({ item }: ProductItemProps) {
  // state
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { setItem } = useProduct();

  // function
  const onItemClick = (item: ProductItemType) => {
    setItem(item);
  };

  const onMouseOver = (id: number) => {
    if (item.id === id) {
      setIsMouseOver(true);
    } else {
      setIsMouseOver(false);
    }
  };

  return (
    <div
      className="product-item-container flex flex-col justify-between relative"
      onClick={() => onItemClick(item)}
      onMouseOver={() => onMouseOver(item.id)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <img src={item.image} alt="Product Image" />
      {isMouseOver && (
        <div className="desc-container absolute flex flex-col items-center justify-center">
          <p className="title">{item.title}</p>
          <p className="rating">평점 : {item.rating.rate}</p>
          <p className="price">
            가격 : {convertCurrency(item.price, 'USD', 'KRW').toLocaleString()}
            원
          </p>
        </div>
      )}
    </div>
  );
}
