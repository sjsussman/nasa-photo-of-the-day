import React, { useState, useEffect } from 'react'

const ImgContainer = (props) =>{ 
    const { photo, setPhoto } = props;
    const {description, setDescription} = props;

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