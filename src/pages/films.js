import React, { Component } from "react"
import Layout from "../components/Layout"
import {graphql} from 'gatsby'
import StyledHero from '../components/styledHero'

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


export default class films extends Component {
  render() {
    return <Layout>
      <StyledHero  img={this.props.data.backgr.childImageSharp.fluid}/>
    </Layout>
  }
}

