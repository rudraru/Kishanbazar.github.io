import axios from 'axios';

const createUser = async (name, email, password) => {
  try {
    const response = await axios.post('http://localhost:3001/users', { name, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// const loginUser = async (email, password) => {
//   try {
//     const response = await axios.post('http://localhost:3001/login', { email, password });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export default  createUser;
// export default loginUser;
