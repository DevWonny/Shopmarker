'use client';
// component
import Header from '@/components/common/Header';
import BaseModal from '@/components/modal/BaseModal';
// store
import { useProduct } from '@/store/Product';

export default function LayoutClient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { item, setItem } = useProduct();

  return (
    <div className="relative">
      <div
        className={`modal-container w-full h-screen absolute ${item ? `active` : ''}`}
        onClick={() => setItem(null)}
      >
        <BaseModal />
      </div>

      <div className={`layout-container ${item ? 'layout-disabled' : ''}`}>
        <Header />
        {children}
      </div>
    </div>
  );
}
