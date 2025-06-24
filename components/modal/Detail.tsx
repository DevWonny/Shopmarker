'use client';

// store
import { useProduct } from '@/store/Product';

export default function Detail() {
  const { item } = useProduct();
  return (
    item && (
      <div className="detail-container">
        <p>{item.id}</p>
        <p>{item.description}</p>
      </div>
    )
  );
}
