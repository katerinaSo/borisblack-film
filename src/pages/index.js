import React from "react"
import Layout from "../components/Layout"

import Banner from "../components/Banner"
import About from "../components/Home/About"
import {graphql} from 'gatsby'
import StyledHero from '../components/styledHero'
import Services from "../components/Home/Services"

export const query=graphql`
query{
  backgr:file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default ({data}) => (
  <Layout>
    <StyledHero home="true" img={data.backgr.childImageSharp.fluid}>
      <Banner
        title="filming your projects"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        {/* <Link to="/films" className="btn-white">
          welcome
        </Link> */}
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)
