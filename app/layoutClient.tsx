'use client';
// component
import Header from '@/components/common/Header';
import BaseModal from '@/components/modal/BaseModal';
// store
import { useProduct } from '@/store/Product';
import { useAuth } from '@/store/Auth';

export default function LayoutClient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { item, setItem } = useProduct();
  const { isSignInClick, isSignUpClick, setIsSignInClick, setIsSignUpClick } =
    useAuth();

  const onModalCloseClick = () => {
    setItem(null);
    setIsSignInClick(false);
    setIsSignUpClick(false);
  };

  return (
    <div className="relative">
      <div
        className={`modal-container w-full h-screen absolute ${item || isSignInClick || isSignUpClick ? `active` : ''}`}
        onClick={onModalCloseClick}
      >
        <BaseModal
          type={item ? 'product' : isSignInClick ? 'signIn' : 'signUp'}
        />
      </div>

      <div className={`layout-container ${item ? 'layout-disabled' : ''}`}>
        <Header />
        {children}
      </div>
    </div>
  );
}
