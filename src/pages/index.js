import React from "react"
import Layout from "../components/Layout"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Banner from "../components/Banner"
import About from "../components/Home/About"
import {graphql} from 'gatsby'
import StyledHero from '../components/styledHero'
import Services from "../components/Home/Services"
import Featured from '../components/Home/Featured'

export const query=graphql`
query{
  backgr:file(relativePath: {eq: "eagleBcg.jpg"}) {
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
        // title=
        info="Reality = Your Vision + My Vision "
      >
        <AniLink to="/contact" className="btn-white">
          let's film it
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    {/* <Services /> */}
    <Featured/>
  </Layout>
)
