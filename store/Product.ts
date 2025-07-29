import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// type
import { ProductItemType } from '@/types/common/ProductItem';

interface ProductData {
  item: ProductItemType | null;
  cart: ProductItemType[];
  setItem: (item: ProductItemType | null) => void;
  setCart: (cart: ProductItemType[]) => void;
}
export const useProduct = create<ProductData>()(
  devtools(
    persist(
      set => ({
        item: null,
        cart: [],
        setItem: item => set({ item }),
        setCart: cart => set({ cart }),
      }),
      { name: 'product-storage' }
    ),
    {
      name: 'Product Store',
    }
  )
);
