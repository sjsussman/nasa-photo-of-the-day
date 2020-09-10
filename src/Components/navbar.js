import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Navbar = (props) => {
    return (
      <StyledNavbar className="navbar-wrapper">
        <div className="links">
                <StyledA href="#">Home</StyledA>
                <StyledA href="#">About</StyledA>
                <StyledA href="#">FAQ</StyledA>
                <StyledA href="#">Contact</StyledA>
        </div>
      </StyledNavbar>
    );
  };

const StyledNavbar = styled.div`
  background: ${props => props.theme.black};
  height: ${props => props.theme.navHeight};
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


export default Navbar;