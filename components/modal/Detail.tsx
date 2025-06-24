/* eslint-disable @next/next/no-img-element */
'use client';

// store
import { useProduct } from '@/store/Product';
// style
import '@/styles/components/modal/Detail.scss';

export default function Detail() {
  const { item } = useProduct();
  return (
    item && (
      <div className="detail-container flex ">
        <img src={item.image} alt="Detail Image" />
        <div className="description-container flex flex-col">
          <h1 className="detail-title text-lg">{item.title}</h1>
          <p className="detail-rate text-sm">Rate : {item.rating.rate}</p>
          <p className="detail-price text-sm">Price : {item.price}</p>
          <p className="detail-description ">{item.description}</p>
        </div>
      </div>
    )
  );
}
