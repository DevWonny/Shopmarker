'use client';

import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

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

  useEffect(() => {
    setEmail('test@naver.com');
    setPassword('123123!@#a');
  }, []);

  return <button onClick={onSignUp}>회원가입</button>;
}
