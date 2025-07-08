'use client';
import { useEffect, useState } from 'react';
// store
import { useAuth } from '@/store/Auth';
// style
import '@/styles/common/Header.scss';

export default function Header() {
  // state
  const { setIsSignInClick, setIsSignUpClick, user } = useAuth();
  const [isSignIn, setIsSignIn] = useState(false);

  // function
  const onAuthClick = (type: string) => {
    if (type === 'logIn') {
      setIsSignInClick(true);
      setIsSignUpClick(false);
    } else if (type === 'signIn') {
      setIsSignInClick(false);
      setIsSignUpClick(true);
    }
  };

  useEffect(() => {
    if (user) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }, [user]);

  return (
    <div className="header-container w-full flex justify-end items-center">
      {isSignIn ? (
        <div className="auth-info flex">
          <p>{user.email}</p>
          <button>Sign Out</button>
        </div>
      ) : (
        <div className="auth-button-container flex">
          <button onClick={() => onAuthClick('logIn')}>로그인</button>
          <button onClick={() => onAuthClick('signIn')}>회원가입</button>
        </div>
      )}
    </div>
  );
}
