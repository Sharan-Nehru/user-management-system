import React from 'react';
import { useSelector } from 'react-redux';

const UserDirectory = () => {
  const users = useSelector((state) => state.users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          <Link to={`/users/${user._id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserDirectory;