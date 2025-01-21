import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !phone) {
      setError("Email and phone are both required");
      return;
    }

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const user = response.data.find(
        (user) => user.email === email && user.phone === phone
      );

      if (user) {
        alert('Login Successful');
        navigate('/dashboard');
      } else {
        setError("Invalid email or phone.");
      }
    } catch (error) {
      console.log('Failed to login', error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="login-form-container">
        <h2>Log In</h2>
        <form id="Login" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
