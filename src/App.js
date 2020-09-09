import React, { useState, useEffect } from 'react'
import "./App.css";
import  Navbar from './Components/navbar'
import  Title from './Components/title'
import  ImgContainer from './Components/img-container'
import  Footer from './Components/footer'
import axios from 'axios'

function App() {

  const [photo, setPhoto] = useState('')

  useEffect(() =>{

  axios.get('https://api.nasa.gov/planetary/apod?api_key=5Ggvu4nrP1E3Xumg1juYqcfkmEybVQIfmqLBCwz7')
  .then(res =>{
    setPhoto(res.data.url)
    console.log(res.data)
  })

  .catch(err =>{

  })

}, []) // end of effect hook


  return (
    <div className="App">
      <Navbar />
      <Title />
      <ImgContainer photo = {photo} setPhoto = {setPhoto}/>
      <Footer />
    </div>
  );
}

export default App;
