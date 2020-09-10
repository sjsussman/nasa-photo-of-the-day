import React, { useState, useEffect } from 'react'
import "./App.css";
import  Navbar from './Components/navbar'
import  Title from './Components/title'
import  ImgContainer from './Components/img-container'
import  Footer from './Components/footer'
import axios from 'axios'
import styled from 'styled-components'

function App() {

  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() =>{

  axios.get('https://api.nasa.gov/planetary/apod?api_key=5Ggvu4nrP1E3Xumg1juYqcfkmEybVQIfmqLBCwz7')
  .then(res =>{
    setPhoto(res.data.url)
    setDescription(res.data.explanation)
    console.log(res.data)
  })

  .catch(err =>{

  })

}, []) // end of effect hook


const StyledDiv = styled.div`
  background : ${props => props.theme.secondaryColor};
  `

  return (
    <StyledDiv className="App">
      <Navbar />
      <Title />
      <ImgContainer photo = {photo} setPhoto = {setPhoto} description = {description} setDescription = {setDescription}/>
      <Footer />
    </StyledDiv>
  );
}

export default App;
