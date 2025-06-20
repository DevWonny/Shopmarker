import axios from 'axios';

export const GetProductList = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  const { data, status } = res;

  if (status !== 200) {
    console.log('Fake Store GetProductList Error');
    return;
  }

  return data;
};
