/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import { getAuth, deleteUser } from 'firebase/auth';
// component
import ProductItem from '@/components/main/ProductItem';
// service
import { GetProductList } from '@/services/FakeStore';
// store
import { useProduct } from '@/store/Product';
import { useAuth } from '@/store/Auth';
// interface
import { ProductItemType } from '@/types/common/ProductItem';
// style
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/app/page.scss';

export default function Main() {
  // State
  const [currentCategory, setCurrentCategory] = useState("men's clothing");
  const [productList, setProductList] = useState<ProductItemType[]>([]);
  const CategoryType = [
    { label: 'men', value: "men's clothing" },
    { label: 'women', value: "women's clothing" },
    { label: 'jewelery', value: 'jewelery' },
    { label: 'electronics', value: 'electronics' },
  ];
  const { setItem } = useProduct();
  const { user } = useAuth();

  // function
  const onTabClick = (value: string) => {
    setItem(null);
    setCurrentCategory(value);
  };

  const onDeleteClick = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.log('로그인 된 상태가 아님!');
      return;
    }

    try {
      await deleteUser(currentUser);
      console.log('회원탈퇴 성공!');
    } catch (err: any) {
      if (err.code === 'auth/requires-recent-login') {
        console.error('다시 로그인 후 시도해 주세요.');
      }
      console.log('Delete Account Error! :', err);
    }
  };

  // useEffect
  useEffect(() => {
    const getList = async () => {
      setProductList(await GetProductList(currentCategory));
    };

    getList();
  }, [currentCategory]);

  return (
    <div className="main-wrap w-full relative ">
      <div className="product-container flex flex-col">
        <div className="product-tab-container flex justify-end">
          {CategoryType.map((category, index) => (
            <button
              key={`product-tab-category-${index}`}
              className={`${currentCategory === category.value ? 'active' : ''} `}
              onClick={() => onTabClick(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="product-list flex flex-wrap justify-between">
          {productList.map(item => (
            <ProductItem item={item} key={`product-item-${item.id}`} />
          ))}
        </div>
      </div>
      {user && (
        <button
          className="delete-account-btn absolute cursor-pointer"
          onClick={onDeleteClick}
        >
          회원 탈퇴
        </button>
      )}
    </div>
  );
}
