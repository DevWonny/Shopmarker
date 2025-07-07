'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
// style
import '@/styles/components/modal/SignUp.scss';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // function
  const onSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('회원가입 완료!');
    } catch (err) {
      console.log('Sign Up Error! : ', err);
    }
  };

  return (
    <div className="sign-up-form flex col">
      <input
        type="text"
        placeholder="ID를 입력하세요."
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="PW를 입력하세요."
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={onSignUp}>회원가입</button>
    </div>
  );
}
