import axios from 'axios';

export const GetProductList = async (type: string) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${type}`
  );
  const { data, status } = res;

  if (status !== 200) {
    console.log('Fake Store GetProductList Error');
    return;
  }
  console.log(data);
  return data;
};
