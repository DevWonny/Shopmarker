'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// component
import ProductItem from '@/components/main/ProductItem';
// service
import { GetProductList } from '@/services/FakeStore';
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

  // function
  const onTabClick = (value: string) => {
    setCurrentCategory(value);
  };

  // useEffect
  useEffect(() => {
    const getList = async () => {
      setProductList(await GetProductList(currentCategory));
    };

    getList();
  }, [currentCategory]);

  return (
    <div className="main-wrap w-full">
      <Swiper
        className="banner-container"
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>

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

        <div className="product-list">
          {productList.map(item => (
            <ProductItem item={item} key={`product-item-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
