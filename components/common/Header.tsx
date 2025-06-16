'use client';
import { useState } from 'react';
// style
import '@/styles/common/Header.scss';

export default function Header() {
  // state
  const [search, setSearch] = useState('');

  // function
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("🚀 ~ onSearch ~ e:", e)
    setSearch(e.target.value);
  };

  return (
    <div className="header-container w-full flex flex-col">
      <div className="menu-container flex items-center justify-between ">
        <div className="logo-container">Logo</div>
        <div className="auth-container">Auth Container</div>
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
