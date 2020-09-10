import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Title = () =>{
    return (
        <StyledDiv className = 'titleContainer'>
            <StyledH1>NASA Photo Of The Day</StyledH1>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
background : ${props => props.theme.black};
`

const StyledH1 = styled.h1`
background: ${props => props.theme.black};
color: ${props => props.theme.white};
`

export default Title;