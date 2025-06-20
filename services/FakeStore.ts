import axios from 'axios';

export const GetProductList = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');

  console.log('res', res);
};
