'use client';
import { useState, useEffect } from 'react';
// store
import { useProduct } from '@/store/Product';
// component
import Detail from './Detail';
import Payment from './Payment';
// style
import '@/styles/components/modal/BaseModal.scss';

export default function BaseModal() {
  const [isShow, setIsShow] = useState(false);
  const { item, setItem } = useProduct();

  // function
  const onClose = () => {
    setItem(null);
  };

  useEffect(() => {
    if (item) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [item]);

  return (
    <div
      className={`base-modal-wrap absolute ${isShow ? 'show' : 'hide'}`}
      onClick={e => e.stopPropagation()}
    >
      <button className="absolute" onClick={onClose}>
        close
      </button>
      <Detail />
      <Payment />
    </div>
  );
}
