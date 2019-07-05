import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'
const getAbout = graphql`
{
  aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}


`
const About = () => {
  const {aboutImage}=useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid}/>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>East + west</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          {/* <button type="button" className="btn-primary">
            read more
          </button> */}
        </article>
      </div>
    </section>
  )
}

export default About
