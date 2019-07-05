import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'



 const StyledHero=({img,className,children,home}) => { 
  return (
    <BackgroundImage fluid={img} className={className} home={home} >

      {children}
    </BackgroundImage>
  )
}


export default styled(StyledHero)`
background:${props=>props.home?"linear-gradient(rgba(63, 202, 212, 0.8), rgba(0, 0, 0, 0.9))":"none"};
min-height:${props=>props.home?"calc(100vh - 70px)":"50vh"};
background-position:center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
opacity:1 !important;
justify-content:center;
background-repeat:no-repeat;
align-items:center;
`