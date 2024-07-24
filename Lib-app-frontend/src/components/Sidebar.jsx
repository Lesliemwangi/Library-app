import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faPlus, faInfoCircle, faEnvelope, faUserPlus, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Make sure this CSS file is properly linked

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = true; // Example static value, update with real logic
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('session');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="sidebar bg-light col-auto col-md-3 col-xl-2 px-sm-2 px-0 min-vh-100 d-flex flex-column">
      <div className="d-flex flex-column p-3 text-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
              <span className="sidebar-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/books">
              <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
              <span className="sidebar-text">Books</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/addbooks">
              <FontAwesomeIcon icon={faPlus} className="sidebar-icon" />
              <span className="sidebar-text">Add Books</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/aboutus">
              <FontAwesomeIcon icon={faInfoCircle} className="sidebar-icon" />
              <span className="sidebar-text">About Us</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" />
              <span className="sidebar-text">Contact</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/signup">
              <FontAwesomeIcon icon={faUserPlus} className="sidebar-icon" />
              <span className="sidebar-text">Signup</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/login">
              <FontAwesomeIcon icon={faSignInAlt} className="sidebar-icon" />
              <span className="sidebar-text">Login</span>
            </Link>
          </li>
          {/* {isLoggedIn && (
            <li className="nav-item mt-auto">
              <div className="dropdown">
                <button
                  className="btn border-none dropdown-toggle text-dark"
                  type="button"
                  id="dropdownMenuButton"
                  aria-expanded={isDropdownOpen}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <FontAwesomeIcon icon={faUser} className="fs-4" />
                  <span className="fs-4 ms-3 d-none d-md-inline">Yousaf</span>
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item disabled" href="#">Disabled action</a></li>
                    <hr className="dropdown-divider" />
                    <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                  </ul>
                )}
              </div>
            </li>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
