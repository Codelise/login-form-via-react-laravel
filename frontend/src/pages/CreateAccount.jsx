import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let loginNavigate = useNavigate();

  function submitAccount(e) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return alert("All fields are required!");
    }

    if (password === confirmPassword) {
      alert("Account created successfully!");
      loginNavigate("/login");
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={submitAccount}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}
