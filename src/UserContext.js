import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (name) => {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      status: 'Pending',
      time: new Date().toLocaleTimeString(),
      comment: ''
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const updateUserStatus = (id, status, comment) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          status,
          time: new Date().toLocaleTimeString(),
          comment
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUserStatus }}>
      {children}
    </UserContext.Provider>
  );
};
