'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ! 임시 작업 -> store로 분류 예정
  // const [user, setUser] = useState<any>(null);

  const onSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log('Sign In Error! : ', err);
    }
  };

  return (
    <div className="sign-in-container">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={onSignIn}>로그인</button>
    </div>
  );
}
