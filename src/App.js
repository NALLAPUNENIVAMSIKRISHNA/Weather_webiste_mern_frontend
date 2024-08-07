import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Weather from "./components/Weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert("Login successful");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully");
  };

  const handleRegister = () => {
    alert("Registration successful");
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
            <Route
              exact
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
            <Route
              exact
              path="/weather"
              element={<Weather onLogout={handleLogout} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;