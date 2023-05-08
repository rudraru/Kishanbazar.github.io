// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Login.css'

// function LogIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Check if the user is already logged in
//     const user = localStorage.getItem('user');
//     if (user) {
//       window.location.href = '/fruits';
//     }
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError('');

//     // Validate email and password
//     if (!email || !password) {
//       setError('Please enter email and password');
//       return;
//     }

//     // Make a POST request to check if the user exists in the database
//     try {
//       const data = await axios.post('http://localhost:3001/login', {
//         email,
//         password,
//       });

//       // If the login is successful, store the user data in localStorage and redirect to the fruits page
//       if (data.status === 200) {
//         localStorage.setItem('user', JSON.stringify(data.data));
//         window.location.href = '/fruits';
//       } else {
//         setError(data.data.message || 'Unknown error');
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Log In</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// }

// export default LogIn;

                    
                    
                    
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css'
import { Link } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if the user is already logged in
    const user = localStorage.getItem('user');
    if (user) {
      window.location.href = '/fruits';
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Validate email and password
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    // Make a POST request to check if the user exists in the database
    try {
      const data = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      // If the login is successful, store the user data in localStorage and redirect to the fruits page
      if (data.status === 200) {
        localStorage.setItem('user', JSON.stringify(data.data));
        window.location.href = '/fruits';
      } else {
        setError(data.data.message || 'Unknown error');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Log In</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default LogIn;
