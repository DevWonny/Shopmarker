'use client';
// store
import { useAuth } from '@/store/Auth';
// style
import '@/styles/common/Header.scss';

export default function Header() {
  // state
  const { setIsSignInClick, setIsSignUpClick } = useAuth();

  // function
  const onAuthClick = (type: string) => {
    if (type === 'logIn') {
      console.log('Login Form');
      setIsSignInClick(true);
      setIsSignUpClick(false);
    } else if (type === 'signIn') {
      console.log('Signup Form');
      setIsSignInClick(false);
      setIsSignUpClick(true);
    }
  };

  return (
    <div className="header-container w-full flex justify-end items-center">
      <div className="auth-container flex">
        <button onClick={() => onAuthClick('logIn')}>로그인</button>
        <button onClick={() => onAuthClick('signIn')}>회원가입</button>
      </div>
    </div>
  );
}
