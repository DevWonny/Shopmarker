import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ProductData {
  id: number | null;
  setId: (id: number | null) => void;
}
export const useProduct = create<ProductData>()(
  devtools(set => ({
    id: null,
    setId: id => set({ id }),
  }))
);
