import { useState } from 'react';
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'; 
import './Nav.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
       <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Tanuja Kavilkar</a>
        <div className={`menu-icon ${isOpen && 'active'}`} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen && 'active'}`}>
          <li className="nav-item">
            <a href="#home" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="#project" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar