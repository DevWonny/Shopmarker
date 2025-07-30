import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// type
import { ProductItemType } from '@/types/common/ProductItem';

interface ProductData {
  item: ProductItemType | null;
  cart: ProductItemType[];
  setItem: (item: ProductItemType | null) => void;
  addToCart: (item: ProductItemType) => void;
  removeCart: (id: number) => void;
  clearCart: () => void;
}
export const useProduct = create<ProductData>()(
  devtools(
    persist(
      set => ({
        item: null,
        cart: [],
        setItem: item => set({ item }),
        addToCart: item => set(state => ({ cart: [...state.cart, item] })),
        removeCart: id =>
          set(state => ({
            cart: state.cart.filter(item => item.id !== id),
          })),
        clearCart: () => set({ cart: [] }),
      }),
      { name: 'product-storage' }
    ),
    {
      name: 'Product Store',
    }
  )
);
