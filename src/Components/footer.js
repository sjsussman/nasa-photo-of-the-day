import React, { useState, useEffect } from 'react'

const Footer = () =>{
    return (
    <div className = 'footer-wrapper'>
        <h1>I am the footer</h1>
         <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
        </div>
    </div>
    )
    
}

export default Footer;