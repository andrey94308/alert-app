import React from "react";
import "./App.css";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Screen1 />} />
            <Route path="/user-status/:id" element={<Screen2 />} />
            <Route path="/thanks" element={<Screen3 />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
