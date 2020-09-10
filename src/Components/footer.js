import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
//can I take a style div from a another component?
//fix width

const StyledNavbar = styled.div`
  background: ${props => props.theme.black};
  height: ${props => props.theme.footerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledA = styled.a `
margin: ${props => props.theme.anchorMargin};
font-size: ${props => props.theme.anchorSize};
color: ${props => props.theme.white};
text-decoration: none;
`

const Footer = () =>{
    return (
    <StyledNavbar className="navbar-wrapper">
        <div className="links">
            <StyledA href="#">Home</StyledA>
            <StyledA href="#">About</StyledA>
            <StyledA href="#">FAQ</StyledA>
            <StyledA href="#">Contact</StyledA>
        </div>
      </StyledNavbar>
    )
}

export default Footer;