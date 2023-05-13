import axios from 'axios';

const addCartItems = async (cartItems) => {
  try {
    const response = await axios.post('http://localhost:3001/cartitems', cartItems);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { addCartItems };
