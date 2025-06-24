import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// type
import { ProductItemType } from '@/types/common/ProductItem';

interface ProductData {
  item: ProductItemType | null;
  setItem: (item: ProductItemType | null) => void;
}
export const useProduct = create<ProductData>()(
  devtools(set => ({
    item: null,
    setItem: item => set({ item }),
  }))
);
