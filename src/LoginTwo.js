// import React, { useState } from 'react';
// import './Login.css';
// const LoginTwo = ({ history }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };


//   const handleSignIn = (event) => {
//     event.preventDefault();
//     if (email === 'r@fkt.com' && password === 'password') {
//       setIsAuthenticated(true);
//       // Change the path to "/" on successful login
//       if (window.history) {
//         window.history.pushState({}, null, "/");
//       }
//     } else {
//       alert('Invalid email or password');
//     }
//   };
  






//   if (isAuthenticated) {
//     return null; // Don't render anything here
//   }

//   return (
//     <div className="form-container">
//       <h1>Sign In!</h1>
//       <form className="sign-up-form" onSubmit={handleSignIn}>
//         <label>
//           Email:
//           <input value={email} onChange={handleEmailChange} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         <button className="login-btn">Sign In!</button>

//       </form>
//     </div>
//   );
// };

// export default LoginTwo;
 





















import React, { useState } from 'react';
import './Login.css';
import Homepage from './Component/Page/Home';


const LoginTwo = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSignIn = (event) => {
    event.preventDefault();
    if (email === 'r@fkt.com' && password === 'password') {
      setIsAuthenticated(true);
      // Change the path to "/" on successful login
      if (window.history) {
        window.history.pushState({}, null, "/");
      }
    } else {
      alert('Invalid email or password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="form-container">
        <h1>Sign In!</h1>
        <form className="sign-up-form" onSubmit={handleSignIn}>
          <label>
            Email:
            <input value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        
          <button className="login-btn">Sign In!</button>

        </form>
      </div>
    );
  }

  return (
    <div>
   
    
      <Homepage/>
    
    </div>
  );
};

export default LoginTwo;
