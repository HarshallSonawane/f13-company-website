// project/frontend/App.js

import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Logo from "./assets/logo/logo_2.jpeg";
import { registerUser, loginUser } from "./components/RegConfig/registration"; // Import registerUser and loginUser functions

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await registerUser(username, password);
  };

  const handleLogin = async () => {
    const loginSuccess = await loginUser(username, password);
    if (loginSuccess === true) {
      // Assuming successful login changes the logged-in state
      setLoggedIn(true);
    }
  };



  // State to toggle between "Register" and "Login"
  const [isRegistering, setIsRegistering] = useState(true);

  // Function to toggle between "Register" and "Login"
  const toggleAuthMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <Navbar setLoggedIn={setLoggedIn}/>
          <Home />
          <About />
          <Services />
          <Blog />
          <Contact />
          <Footer />
        </>
      ) : (
        <div className="auth-container">
          <div className="login-container">
            <div className="login-box">
              <img src={Logo} alt="logo" width={400} />
              <br />
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label>Password: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="toggle-btn" onClick={toggleAuthMode}>
                {isRegistering ? "Register Here" : "Login"}
              </div>
              <button onClick={isRegistering ? handleLogin : handleRegister}>
                {isRegistering ? "Login" : "Register Here"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Toggle button at top right corner */}
    </div>
  );
}

export default App;
