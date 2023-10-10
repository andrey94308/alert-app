import React, { createContext, useContext, useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   where,
//   query,
//   getDocs,
//   deleteDoc,
//   addDoc,
//   updateDoc,
// } from "firebase/firestore";

// import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD5SK0FM-yO4ZWPS7F5_lfBtmSJf8XmAdc",
  authDomain: "alert-app-6fed8.firebaseapp.com",
  projectId: "alert-app-6fed8",
  storageBucket: "alert-app-6fed8.appspot.com",
  messagingSenderId: "828718563802",
  appId: "1:828718563802:web:b51cdb5c55e4d2824800e3",
  measurementId: "G-NVPRKPS745",
};

const UserContext = createContext();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // const usersFromDb = await getUsersFromDb();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // useEffect(() => {
  //   const getUsersFromDb = async () => {
  //     const usersCol = collection(db, "users");
  //     const usersSnapshot = await getDocs(usersCol);
  //     const usersList = usersSnapshot.docs.map((doc) => doc.data());
  //     setUsers(usersList);
  //     setLoading(false); // Set loading to false once data is fetched
  //   };

  //   getUsersFromDb(); // Call the function to fetch users

  // }, []); // Empty dependency array ensures this effect runs only once

  const addUser = async (name) => {
    // Reference to your table named 'users'
    // const usersRef = collection(db, "users");

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      status: "Pending",
      time: new Date().toLocaleTimeString(),
      comment: "",
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // try {
    //   const docRef = await addDoc(usersRef, newUser);
    //   console.log("User added with document ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding user: ", e);
    // }
  };

  const deleteUser = async (id) => {
    // const usersRef = collection(db, "users");

    // // Create a query to find the document with the matching userId
    // const q = query(usersRef, where("id", "==", id));

    // try {
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach(async (doc) => {
    //     await deleteDoc(doc.ref);
    //     console.log(`Deleted user with id: ${id}`);
    //   });
    // } catch (e) {
    //   console.error("Error deleting user document: ", e);
    // }
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
  };

  const updateUserStatus = async (id, status, comment) => {
    // const usersRef = collection(db, "users");

    // // Create a query to find the document with the matching userId
    // const q = query(usersRef, where("id", "==", id));

    // try {
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach(async (doc) => {
    //     await updateDoc(doc.ref, {
    //       status,
    //       time: new Date().toLocaleTimeString(),
    //       comment,
    //     });
    //     console.log(`Updated user with id: ${id}`);
    //   });
    // } catch (e) {
    //   console.error("Error updating user document: ", e);
    // }

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
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, deleteUser, updateUserStatus }}
    >
      {children}
    </UserContext.Provider>
  );
};
