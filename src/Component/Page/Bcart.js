// import React, { useState, useEffect } from "react";

// function LoginPage({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // perform login request here and call onLogin() if successful
//     // For the sake of simplicity, let's assume the login always succeeds
//     onLogin();
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// function FruitsPage() {
//   return (
//     <div>
//       <h1>Fruits Page</h1>
//       <p>Welcome to the Fruits page!</p>
//     </div>
//   );
// }
// function Bcart() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if the user is already logged in
//     const isLoggedIn = checkIfUserIsLoggedIn(); // Replace this with your own function that checks if the user is logged in
//     setLoggedIn(isLoggedIn);
//   }, []);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   return (
//     <div>
//       {loggedIn ? (
//         <FruitsPage />
//       ) : (
//         <LoginPage onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default Bcart;
