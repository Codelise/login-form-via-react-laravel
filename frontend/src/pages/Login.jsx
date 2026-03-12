import { Link } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../api/axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginAccount(e) {
    e.preventDefault();
    if (!email || !password) {
      return alert("All fields are required!");
    }

    try {
      // fetches csrf cookie from Laravel
      await axiosClient.get("/sanctum/csrf-cookie");
      // post request to Laravel
      // TO BE CONTINUED LATER
      const response = await axiosClient.post("/api/login", {
        email: email,
        password: password,
      });
      return alert("Logged in successfully");
    } catch (error) {
      return alert(error.response?.data.message || "Failed to log in");
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginAccount}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
        <Link to="/register">Create an Account</Link>
      </form>
    </div>
  );
}
