import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Ensure you create a Sidebar.css file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="navbar-brand" to="/">Library App</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/books">Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addbooks">Add Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
