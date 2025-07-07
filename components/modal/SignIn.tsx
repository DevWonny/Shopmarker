/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
// style
import '@/styles/components/modal/Auth.scss';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ! 임시 작업 -> store로 분류 예정
  const [user, setUser] = useState<any>(null);

  const onSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      auth.onAuthStateChanged(u => {
        if (u) {
          setUser(u);
        }
      });
    } catch (err) {
      console.log('Sign In Error! : ', err);
    }
  };

  useEffect(() => {
    console.log('🚀 ~ SignIn ~ user:', user);
  }, [user]);

  return (
    <div className="sign-in-container flex flex-col">
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
      <button onClick={onSignIn}>로그인</button>
    </div>
  );
}
