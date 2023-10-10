import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from 'react-dom/client';

const functions = require('firebase-functions');

exports.myFunction = functions.https.onRequest((req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.send('console.log("Hello, world!");');
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);