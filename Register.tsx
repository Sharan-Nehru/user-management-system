import React, { useState } from 'react';
import { register } from '../actions';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    register(name, email, password, bio);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;