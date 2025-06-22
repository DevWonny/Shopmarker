'use client';
// interface
import { ProductItemType } from '@/types/common/ProductItem';

type ProductItemProps = {
  item: ProductItemType;
};

// ! props : item -> type check 필요
export default function ProductItem({ item }: ProductItemProps) {
  return (
    <div className="product-item-container">
      <p>ID : {item.id}</p>
      <p>Category : {item.category}</p>
      <p>Description : {item.description}</p>
      <p>Image : {item.image}</p>
      <p>Price : {item.price}</p>
      <p>
        Rating : {item.rating.rate} / {item.rating.count}
      </p>
      <p>Title : {item.title}</p>
    </div>
  );
}
