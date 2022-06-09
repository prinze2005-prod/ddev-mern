import React from 'react'
import styled from 'styled-components'
import Image from '../assets/painting.jpg'

const Card = () => {
  return (
      <StyledCard>
         
          <img src={Image} alt='painting'></img>
      
      
    </StyledCard>
  )
}


const StyledCard = styled.article`

max-width: 500px;
img{
    width:112%;
}


`
export default Card
