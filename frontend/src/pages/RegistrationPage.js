import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('https://api.render.com/deploy/srv-chuclcl269vccp3o3b60?key=lygq1PZ6kYI/api/users/register', { username, password })
      .then(response => {
        console.log(response.data);
        alert("User registered successfully!");
        navigate('/');
      })
      .catch(error => {
        console.error("There was an error registering the user:", error);
        alert("There was an error while registering the user. Please try again later.");
      });
  }

  return (
    <div className="center">
      <br />
      <br />
      <form onSubmit={handleRegister} className="form">
        <p id="heading">Register</p>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          </svg>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="login-input" />
        </div>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          </svg>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="login-input" />
        </div>
        <div className="btn">
          <button type="submit" className="button3">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
