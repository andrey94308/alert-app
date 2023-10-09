import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Дополнительные модули Firebase, если необходимо

const firebaseConfig = {
  apiKey: "AIzaSyD5SK0FM-yO4ZWPS7F5_lfBtmSJf8XmAdc",
  authDomain: "alert-app-6fed8.firebaseapp.com",
  projectId: "alert-app-6fed8",
  storageBucket: "alert-app-6fed8.appspot.com",
  messagingSenderId: "828718563802",
  appId: "1:828718563802:web:b51cdb5c55e4d2824800e3",
  measurementId: "G-NVPRKPS745"
};

initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);