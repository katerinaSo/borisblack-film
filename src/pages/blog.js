import React from "react"
import Layout from "../components/Layout"
import {graphql} from 'gatsby'
import StyledHero from '../components/styledHero'

export const query=graphql`
query{
  backgr:file(relativePath: {eq: "blogAlt.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`


const blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.backgr.childImageSharp.fluid}/>
    </Layout>
  )
}

export default blog
