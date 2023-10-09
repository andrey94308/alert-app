import React, { createContext, useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

const UserContext = createContext();

export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (name) => {
    // Reference to your table named 'users'
    const usersRef = firebase.database().ref("users");

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      status: "Pending",
      time: new Date().toLocaleTimeString(),
      comment: "",
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    usersRef.push(newUser);
  };

  const deleteUser = (id) => {
    const userRef = firebase.database().ref(`users/${id}`);
    userRef.remove();
    
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
  };

  const updateUserStatus = (id, status, comment) => {
    // Reference to a specific user by userId
    const userRef = firebase.database().ref(`users/${id}`);

    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          status,
          time: new Date().toLocaleTimeString(),
          comment,
        };
      }
      return user;
    });
    setUsers(updatedUsers);
    userRef.update({
      status,
      time: firebase.database.ServerValue.TIMESTAMP,
      comment,
    });
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, deleteUser, updateUserStatus }}
    >
      {children}
    </UserContext.Provider>
  );
};
