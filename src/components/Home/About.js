import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
const getAbout = graphql`
  {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
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
          <h4>filmmakers</h4>
          <p>
            Boston Producer{" "}
            <a className={styles.aboutLink} href="#">
              Boris Black
            </a>
            <br></br>
            took a new turn for his multimedia compamy  (BorisBlackWorks) to
            film production and turned his film debute{" "}
            <a
              className={styles.aboutLink}
              href="https://www.youtube.com/watch?v=Cqe13_kR6KQ"
            >
              'The Usual Route'
            </a>{" "}
            into a success. He welcomes new ideas and this site is done to
            welcome new connections for filmmaking and bringing human visions
            together.
          </p>
          <p>
            Cinematographer from Los Angeles{" "}
            <a className={styles.aboutLink} href="http://www.corywarner.com/">
              Corey Warner
            </a>
            
              {' '}is very talented, passionate, driven. His{" "}
            <a className={styles.aboutLink} href="http://www.corywarner.com/">
              cinematography
            </a>{" "}
            work speaks for itself.
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
