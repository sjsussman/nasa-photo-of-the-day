import React, { useState, useEffect } from 'react'
import "./App.css";
import  Navbar from './Components/navbar'
import  Title from './Components/title'
import  ImgContainer from './Components/img-container'
import  Footer from './Components/footer'
import axios from 'axios'
import styled from 'styled-components'

function App() {

const StyledDiv = styled.div`
  background : ${props => props.theme.secondaryColor};
  `

  return (
    <StyledDiv className="App">
      <Navbar />
      <Title />
      <ImgContainer />
      <Footer />
    </StyledDiv>
  );
}

export default App;
