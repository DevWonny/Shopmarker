'use client';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// store
import { useProduct } from '@/store/Product';

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

  return (
    <div className="test-cart-item">
      <p>{item.title}</p>
      <button onClick={onCartItemDelete}>Delete</button>
    </div>
  );
}
