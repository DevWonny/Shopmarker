'use client';
import { useEffect, useState } from 'react';
// store
import { useAuth } from '@/store/Auth';
import { signOut, getAuth } from 'firebase/auth';
// style
import '@/styles/common/Header.scss';

export default function Header() {
  // state
  const { setIsSignInClick, setIsSignUpClick, user, setUser } = useAuth();
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

  const onSignOutClick = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setIsSignIn(false);
      setUser(null);
    } catch (err) {
      console.log('Sing Out Error! : ', err);
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
          <button onClick={onSignOutClick}>Sign Out</button>
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
