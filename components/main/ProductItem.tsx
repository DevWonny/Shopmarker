/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// style
import '@/styles/components/ProductItem.scss';

type ProductItemProps = {
  item: ProductItemType;
};

// ! props : item -> type check 필요
export default function ProductItem({ item }: ProductItemProps) {
  // state
  const [isMouseOver, setIsMouseOver] = useState(false);

  // function
  const onItemClick = (id: number) => {
    // ! Click 시 페이지 전환 예정
    console.log('Id : ', id);
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
      className="product-item-container flex flex-col justify-between replace"
      onClick={() => onItemClick(item.id)}
      onMouseOver={() => onMouseOver(item.id)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <img src={item.image} alt="Product Image" />
      {isMouseOver && (
        <div className="desc-container absolute">
          <p>{item.title}</p>
          <p>
            Rating : {item.rating.rate} / {item.rating.count}
          </p>
          <p>Price : {item.price}</p>
        </div>
      )}
    </div>
  );
}
