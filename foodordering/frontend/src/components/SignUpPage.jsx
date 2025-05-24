
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/authActions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Password mismatch check with toast
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    setIsLoading(true);
  
    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
      });
  
      // Dispatch Redux action
      dispatch(signupUser(name, email, password));
  
      // Show success toast after successful signup
      toast.success("Signed up successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      console.log(response.data); // Contains the response from the backend (e.g., token)
  
    } catch (error) {
      toast.error(error.response?.data?.message || "Error signing up. Please try again.");
      console.error('Error:', error.response?.data || error);
    } finally {
      setIsLoading(false); // Disable the loading state regardless of success or failure
    }
  };
  

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center fs-2 text-danger mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                    autoComplete="new-password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"

                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"

                />
              </div>
              <button
                type="submit"
                className="btn btn-danger"style={{ fontFamily: "'Dancing Script', cursive" }}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>
            <p className="mt-3 text-center">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default SignUpPage;
