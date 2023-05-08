import axios from 'axios';

const createOrder = async (order) => {
  try {
    const response = await axios.post('http://localhost:3000/orders', order);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createOrder };
