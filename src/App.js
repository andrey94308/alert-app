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
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact component={Screen1} />
            <Route path="/user-status/:id" component={Screen2} />
            <Route path="/thanks" component={Screen3} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
