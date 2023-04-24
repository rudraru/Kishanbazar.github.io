


import React, { useState} from 'react';
import createUser  from '../api/Api';
const Signup = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const data = await getUsers();
  //     setUsers(data);
  //   };

  //   fetchUsers();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = await createUser(name, email, password);
    setUsers(prevUsers => [...prevUsers, newUser]);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;


