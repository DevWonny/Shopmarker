'use client';
// component
import Header from '@/components/common/Header';
import BaseModal from '@/components/modal/BaseModal';

export default function LayoutClient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <Header />
      {children}
      <BaseModal />
    </div>
  );
}
