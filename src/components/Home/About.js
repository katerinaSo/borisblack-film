import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
const getAbout = graphql`
  {
    aboutImage: file(relativePath: { eq: "aboutSm.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          {/* <h4>filmmakers</h4> */}
          <p>
            Boston Producer{" "}
            <a className={styles.aboutLink} href="mailto:borisblack@hotmail.com">
              Boris Black
            </a>
            <br></br>
             welcomes new ideas and connections for filmmaking, bringing people's creative visions
            together. 
            
          </p>
          <p>
            Cinematographer from Los Angeles{" "}
            <a className={styles.aboutLink} href="http://www.corywarner.com/">
              Corey Warner
            </a>
            
              {' '}is a passionate and dedicated talent; his cinematography{" "}
            <a className={styles.aboutLink} href="http://www.corywarner.com/">
            work 
            </a>{" "}
            speaks for itself.
            <br></br> 
            <br></br>
            
            Their recent film{" "}
            <a
              className={styles.aboutLink}
              href="https://www.youtube.com/watch?v=Cqe13_kR6KQ"
            >
              'The Usual Route'
            </a>{" "}
            became a success on Film Festivals receiving awards, recognitions and love from the audience. 
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
