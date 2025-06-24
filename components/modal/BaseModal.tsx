'use client';
import { useState, useEffect } from 'react';
// store
import { useProduct } from '@/store/Product';
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
    <div className={`base-modal-wrap absolute ${isShow ? 'show' : 'hide'}`}>
      <p>Base Modal</p>
      {item?.id}

      <button onClick={onClose}>close</button>
    </div>
  );
}
