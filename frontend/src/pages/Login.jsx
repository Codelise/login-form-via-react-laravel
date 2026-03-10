import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginAccount(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are required!");
    } else {
      alert("Logged in successfully!");
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
