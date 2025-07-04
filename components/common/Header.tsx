'use client';
import { useState } from 'react';
// store
import { useAuth } from '@/store/Auth';
// style
import '@/styles/common/Header.scss';

export default function Header() {
  // state
  const [search, setSearch] = useState('');
  const { setIsSignInClick, setIsSignUpClick } = useAuth();

  // function
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
    <div className="header-container w-full flex flex-col">
      <div className="menu-container flex items-center justify-between ">
        <div className="logo-container">Logo</div>
        <div className="auth-container flex">
          <button onClick={() => onAuthClick('logIn')}>로그인</button>
          <button onClick={() => onAuthClick('signIn')}>회원가입</button>
        </div>
      </div>

      <div className="search-container w-full flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full"
          value={search}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
