import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Navbar({ onSearch, searchQuery }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  const cartItems = useSelector((state) => state.cart.cart);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-black fixed-top"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      <div className="container-fluid mx-5 ms-2">
        <Link
          className="navbar-brand fs-1 fw-bold fst-italic text-danger"
          style={{ fontSize: '75px' }}
          to="/"
        >
          Food<span className="text-white">Villa</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/review">Review</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category">Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/team">Our Team</Link>
            </li>

            {/* Search bar and button */}
            <li className="nav-item d-flex align-items-center">
              <input
                type="text"
                name="search"
                aria-label="Search categories"
                className="form-control"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button onClick={handleSearchClick} className="btn btn-danger ml-2 mx-2">
                <i className="fa-solid fa-search" />
              </button>
            </li>

            {/* Cart Icon with item count */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">
                <i className="fa-solid fa-cart-shopping" />
                {cartItemCount > 0 && (
                  <span className="badge bg-white text-dark ms-2">{cartItemCount}</span>
                )}
              </Link>
            </li>

            {/* Auth Options */}
            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdownUser"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user ? user.name : 'Account'}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownUser">
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-center text-white mx-2" to="/login">
                    <FaSignInAlt />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-center text-white" to="/signup">
                    <FaUserPlus />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
