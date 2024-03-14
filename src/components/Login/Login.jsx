
import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };


  return { loggedIn, username, password, handleLogin, logout, setUsername, setPassword };
};
