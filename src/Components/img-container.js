import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ImgContainer = (props) =>{ 
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

    return (
        
        <div className = 'imageContainer'>
            <img 
            className = 'photo' 
            src ={ photo }
            alt = 'random of the day'
            />
            <h3>{ description }</h3>
        </div>
    )
    
}

export default ImgContainer;