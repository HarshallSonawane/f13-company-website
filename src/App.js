import React from "react";
import "./App.css";
import { Login } from "./components/Login/Login";
import "./components/Login/Login.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Logo from "./assets/logo/logo_2.jpeg";

function App() {
  const {
    loggedIn,
    username,
    password,
    handleLogin,
    setUsername,
    setPassword,
  } = Login();

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <Navbar />
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
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
