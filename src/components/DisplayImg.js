import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const getImages=graphql`
{

    fluidImage: file(relativePath: {eq: "blogBcg.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  
`



export default () => {
    const data =useStaticQuery(getImages)
  return (
    <Wrapper>
      
      <Img fluid={data.fluidImage.childImageSharp.fluid}/>
     
    </Wrapper>
  )
}
const Wrapper = styled.div`
border:1px solid black;

`
