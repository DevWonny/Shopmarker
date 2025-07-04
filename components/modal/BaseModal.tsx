'use client';
import { useState, useEffect } from 'react';
// store
import { useProduct } from '@/store/Product';
import { useAuth } from '@/store/Auth';
// component
import Detail from './Detail';
import SignUp from './SignUp';
import SignIn from './SignIn';
// style
import '@/styles/components/modal/BaseModal.scss';

type BaseModalProps = {
  type: string;
};

export default function BaseModal({ type }: BaseModalProps) {
  const [isShow, setIsShow] = useState(false);
  const { item, setItem } = useProduct();
  const { isSignInClick, isSignUpClick, setIsSignInClick, setIsSignUpClick } =
    useAuth();

  // function
  const onClose = () => {
    setItem(null);
    setIsSignInClick(false);
    setIsSignUpClick(false);
  };

  useEffect(() => {
    if (item || isSignInClick || isSignUpClick) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [item, isSignInClick, isSignUpClick]);

  useEffect(() => {
    console.log('🚀 ~ BaseModal ~ type:', type);
  }, [type]);

  return (
    <div
      className={`base-modal-wrap absolute ${isShow ? 'show' : 'hide'}`}
      onClick={e => e.stopPropagation()}
    >
      <button className="absolute" onClick={onClose}>
        close
      </button>
      {type === 'product' ? (
        <Detail />
      ) : type === 'signIn' ? (
        <SignIn />
      ) : (
        <SignUp />
      )}
    </div>
  );
}
