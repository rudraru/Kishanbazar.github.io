import axios from 'axios';
const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export { loginUser}