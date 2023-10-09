import React, { useState } from 'react';
import { useUsers } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Screen1 = () => {
  const navigate = useNavigate();
  const { users, addUser, deleteUser } = useUsers();
  const [userName, setNewUserName] = useState('');

  const goToScreen2 = (id) => {
    navigate(`/user-status/:${id}`);
  } 

  return (
    <div>
      <input 
        type="text" 
        value={userName} 
        onChange={(e) => setNewUserName(e.target.value)} 
        placeholder="Enter User Name" 
      />
      <button onClick={() => addUser(userName)}>Add</button>
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
              <td onClick={() => goToScreen2(user.id)}>{user.name}</td>
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
