import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';  // Use Redux to check if the user is logged in

function ProfilePage() {
  // State to manage user details, loading state, and error handling
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the token from Redux (assuming it is stored after login)
  const { isAuthenticated, user, token } = useSelector((state) => state.auth); // Check if authenticated

  useEffect(() => {
    // Only attempt to fetch user details if user is authenticated
    if (isAuthenticated && token) {
      // Fetch user details
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/user', {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token for authentication
            },
          });
          setUserDetails(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.response?.data?.message || 'Error fetching user details');
          setLoading(false);
        }
      };

      fetchUserDetails();
    } else {
      setError('You are not logged in!');
      setLoading(false);
    }
  }, [isAuthenticated, token]); // Dependency array ensures the effect runs when the user logs in

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-page my-5">
      <div className="container">
        <h1 className="profile-title text-center my-5"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Your Profile</h1>

        {/* Profile Information */}
        <div className="profile-info">
          <p><strong>Full Name:</strong> {userDetails?.name}</p>
          <p><strong>Email:</strong> {userDetails?.email}</p>
          <p><strong>Phone:</strong> {userDetails?.phone}</p>
          <p><strong>Shipping Address:</strong> {userDetails?.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
