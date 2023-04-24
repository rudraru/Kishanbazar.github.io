import axios from 'axios';

const createUser = async (name, email, password) => {
  try {
    const response = await axios.post('http://localhost:3001/users', { name, email, password });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { createUser };
