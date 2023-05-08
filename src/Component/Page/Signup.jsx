import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createUser from '../api/Api';
import './Signup.css';

const Signup = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      setError('Email is already taken');
      setTimeout(() => {
        setError('');
      }, 4000);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setTimeout(() => {
        setError('');
      }, 4000);
      return;
    }

    const newUser = await createUser(name, email, password);
    setUsers(prevUsers => [...prevUsers, newUser]);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      history('/SignIn');
    }, 4000);
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>

      {error && <p className="error">{error}</p>}

      {success && (
        <div className="success-popup">
          <p>Signup successful! Redirecting to LogIn page ...</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value) } required />
        <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} required/>
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} required/>
        <button type="submit">Submit</button>
      </form>

      {/* <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Signup;

