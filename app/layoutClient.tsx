'use client';
// component
import Header from '@/components/common/Header';

export default function LayoutClient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
