import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => (
  <Layout>
    <SimleHero>
      <Banner
        title="filming your projects"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        {/* <Link to="/films" className="btn-white">
          welcome
        </Link> */}
      </Banner>
    </SimleHero>
    <About />
    <Services />
  </Layout>
)
