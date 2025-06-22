/* eslint-disable @next/next/no-img-element */
'use client';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// style
import '@/styles/components/ProductItem.scss';

type ProductItemProps = {
  item: ProductItemType;
};

// ! props : item -> type check 필요
export default function ProductItem({ item }: ProductItemProps) {
  // function
  const onItemClick = (id: number) => {
    // ! Click 시 페이지 전환 예정
    console.log('Id : ', id);
  };

  return (
    <div
      className="product-item-container"
      onClick={() => onItemClick(item.id)}
    >
      <img src={item.image} alt="Product Image" />
      <p>{item.title}</p>
      <p>
        Rating : {item.rating.rate} / {item.rating.count}
      </p>
      <p>Price : {item.price}</p>
    </div>
  );
}
