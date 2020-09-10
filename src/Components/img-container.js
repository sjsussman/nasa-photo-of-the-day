import React, { useState, useEffect } from 'react'

const ImgContainer = (props) =>{ 
    const { photo, setPhoto } = props;
    return (
        
        <div className = 'imageContainer'>
            <img 
            className = 'photo' 
            src ={ photo }
            alt = 'random of the day'
            />
        </div>
    )
    
}

export default ImgContainer;