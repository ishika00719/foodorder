import axios from 'axios';

// **Login Action**
export const loginUser = (email, password) => {
  return (dispatch) => {
    // Dispatching the login request (optional)
    dispatch({ type: 'LOGIN_USER_REQUEST' });

    // Making the API call to login
    return axios
      .post('http://localhost:5000/api/login', { email, password })
      .then((response) => {
        // On success, save the token to localStorage and dispatch success action
        localStorage.setItem('token', response.data.token); // Store token in localStorage

        // Dispatch login success action with user data
        dispatch({
          type: 'LOGIN_USER_SUCCESS',
          payload: response.data.user, // Store the user data in the payload
        });

        return response; // Return the response to handle in the component
      })
      .catch((error) => {
        // On failure, dispatch failure action with error message
        dispatch({
          type: 'LOGIN_USER_FAILURE',
          payload: error.response ? error.response.data.message : 'Login failed!',
        });
        return Promise.reject(error.response ? error.response.data : { message: 'Login failed!' });
      });
  };
};

// **Signup Action**
export const signupUser = (name, email, password) => {
  return (dispatch) => {
    // Dispatching the signup request (optional)
    dispatch({ type: 'SIGNUP_USER_REQUEST' });

    // Making the API call to signup
    return axios
      .post('http://localhost:5000/api/signup', { name, email, password })
      .then((response) => {
        // On success, save the token to localStorage and dispatch success action
        localStorage.setItem('token', response.data.token); // Store token in localStorage

        // Dispatch signup success action with user data
        dispatch({
          type: 'SIGNUP_USER_SUCCESS',
          payload: response.data.user, // Store the user data in the payload
        });

        return response; // Return the response to handle in the component
      })
      .catch((error) => {
        // On failure, dispatch failure action with error message
        dispatch({
          type: 'SIGNUP_USER_FAILURE',
          payload: error.response ? error.response.data.message : 'Signup failed!',
        });
        return Promise.reject(error.response ? error.response.data : { message: 'Signup failed!' });
      });
  };
};

// **Logout Action**
export const logoutUser = () => {
  return (dispatch) => {
    // Remove token from localStorage
    localStorage.removeItem('token');

    // Dispatch logout action
    dispatch({
      type: 'LOGOUT_USER',
    });
  };
};

// **Update User Profile Action**
export const updateUserProfile = (updatedUserData) => {
  return (dispatch) => {
    // Dispatch update request action (optional)
    dispatch({ type: 'UPDATE_USER_PROFILE_REQUEST' });

    // Make the API call to update the user's profile
    return axios
      .put('http://localhost:5000/api/updateProfile', updatedUserData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add token in headers
        },
      })
      .then((response) => {
        // On success, update the user data in the Redux store
        dispatch({
          type: 'UPDATE_USER_PROFILE_SUCCESS',
          payload: response.data.user, // The updated user data
        });

        // Optionally, update user data in localStorage if needed
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Update localStorage

        return response; // Return the response to handle in the component
      })
      .catch((error) => {
        // On failure, dispatch failure action with error message
        dispatch({
          type: 'UPDATE_USER_PROFILE_FAILURE',
          payload: error.response ? error.response.data.message : 'Profile update failed!',
        });
        return Promise.reject(error.response ? error.response.data : { message: 'Profile update failed!' });
      });
  };
};
