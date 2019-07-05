import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from '../components/styledHero'
import Contact from "../components/Contact/Contact"

export const query=graphql`
query{
  backgr:file(relativePath: {eq: "connectBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default function contact({data}) {
  

  return (
    <Layout>
    <StyledHero home="" img={data.backgr.childImageSharp.fluid}/>
    <Contact/>
    </Layout>
  )
}
