import React, { useState, useEffect } from 'react'

const Navbar = (props) => {
    return (
      <div className="navbar-wrapper">
        <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
        </div>
      </div>
    );
  };

export default Navbar;