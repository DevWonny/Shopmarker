/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ProductData {
  user: any;
  isSignInClick: boolean;
  isSignUpClick: boolean;
  setUser: (user: any) => void;
  setIsSignInClick: (isSignInClick: boolean) => void;
  setIsSignUpClick: (isSignUpClick: boolean) => void;
}
export const useProduct = create<ProductData>()(
  devtools(set => ({
    user: null,
    isSignInClick: false,
    isSignUpClick: false,
    setUser: user => set({ user }),
    setIsSignInClick: isSignInClick => set({ isSignInClick }),
    setIsSignUpClick: isSignUpClick => set({ isSignUpClick }),
  }))
);
