import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaCar, FaBars, FaTimes } from 'react-icons/fa';
import '../CSS/Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <FaCar className="logo-icon" />
        CAR RENTAL
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/quiz-app" className="nav-link" onClick={closeMobileMenu}>Quiz App</Link>
        </li>
        <li className="nav-item">
          <Link to="/shopping-cart" className="nav-link" onClick={closeMobileMenu}>Add to Cart</Link>
        </li>

        <li className="nav-item">
          <Link to="/login-github" className="nav-link" onClick={closeMobileMenu}>Login with GitHub</Link>
        </li>
        <li className="nav-item">
          <Link to="/login-google" className="nav-link" onClick={closeMobileMenu}>Login with Google</Link>
        </li>
        <li className="nav-item">
          <Link to="/digital-clock" className="nav-link" onClick={closeMobileMenu}>Digital Clock</Link>
        </li>
        <li className="nav-item">
          <Link to="/add-item" className="nav-link" onClick={closeMobileMenu}>Add Item</Link>
        </li>
        <li className="nav-item">
          <Link to="/crud" className="nav-link" onClick={closeMobileMenu}>CRUD</Link>
        </li>
        <li className="nav-item">
          <Link to="/click-handler" className="nav-link" onClick={closeMobileMenu}>Click Handler</Link>
        </li>
        <li className="nav-item">
          <Link to="/conditions" className="nav-link" onClick={closeMobileMenu}>Conditions</Link>
        </li>
        <li className="nav-item">
          <Link to="/fetch-item" className="nav-link" onClick={closeMobileMenu}>Fetch Item</Link>
        </li>
        <li className="nav-item">
          <Link to="/fetch-axios" className="nav-link" onClick={closeMobileMenu}>Fetch Axios</Link>
        </li>
        <li className="nav-item">
          <Link to="/multi-form" className="nav-link" onClick={closeMobileMenu}>Multi Form</Link>
        </li>
        <li className="nav-item">
          <Link to="/practice-effect" className="nav-link" onClick={closeMobileMenu}>Practice Effect</Link>
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link" onClick={closeMobileMenu}>Todo List</Link>
        </li>
        <li className="nav-item">
          <Link to="/uncontrollable-form" className="nav-link" onClick={closeMobileMenu}>Uncontrollable Form</Link>
        </li>
      </ul>

      <div className="nav-buttons">
        <button className="btn btn-login">Login</button>
        <button className="btn btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
