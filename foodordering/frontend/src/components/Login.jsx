import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // useNavigate for React Router v6+

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Dummy credentials
    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin/dashboard'); // ✅ Navigate to dashboard
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "20px" }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">Admin Login</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-danger mt-3"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "20px" }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
