'use client';

import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
// store
import { useAuth } from '@/store/Auth';
// style
import '@/styles/components/modal/Auth.scss';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ! 임시 작업 -> store로 분류 예정
  const { setUser, setIsSignInClick } = useAuth();

  const onSignIn = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      auth.onAuthStateChanged(u => {
        if (u) {
          setUser(u);
        }
      });

      setIsSignInClick(false);
    } catch (err) {
      console.log('Sign In Error! : ', err);
      alert('아이디 및 비밀번호를 체크해주세요!');
    }
  };

  return (
    <form
      className="sign-in-container flex flex-col"
      onSubmit={e => {
        e.preventDefault();
        onSignIn();
      }}
    >
      <input
        type="email"
        value={email}
        placeholder="ID를 입력하세요."
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="PW를 입력하세요."
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
    </form>
  );
}
