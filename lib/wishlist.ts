import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useProduct } from '@/store/Product';

// db - store 동기화
export const syncWishlistWithFirebase = async (userId: string) => {
  const wishlist = useProduct.getState();
  const docRef = doc(db, 'wishlist', userId);
  await setDoc(docRef, { items: wishlist.cart });
};

// db에 저장된 내용 가져오기
export const fetchWishlistWithFirebase = async (userId: string) => {
  const docRef = doc(db, 'wishlist', userId);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    useProduct.getState().setCart(snapshot.data().items || []);
  }
};
