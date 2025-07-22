'use client';
// interface
import { ProductItemType } from '@/types/common/ProductItem';

// type
type CartProductItemProps = {
  item: ProductItemType;
};

export default function CartItem({ item }: CartProductItemProps) {
  return (
    <div className="test-cart-item">
      <p>{item.title}</p>
      <p>Test 123</p>
    </div>
  );
}
