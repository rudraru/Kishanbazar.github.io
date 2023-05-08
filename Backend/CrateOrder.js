import axios from 'axios';

const createOrder = async (order) => {
  try {
    const response = await axios.post('http://localhost:3001/orders', order);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createOrder };
