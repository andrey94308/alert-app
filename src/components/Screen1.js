import React, { useState } from 'react';
import { useUsers } from '../UserContext';

const Screen1 = () => {
  const { users, addUser, deleteUser } = useUsers();
  const [newUser, setNewUser] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={newUser} 
        onChange={(e) => setNewUser(e.target.value)} 
        placeholder="Enter User Name" 
      />
      <button onClick={addUser}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Status</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.time}</td>
              <td>{user.status}</td>
              <td>{user.comment}</td>
              <td><button onClick={() => deleteUser(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Screen1;
