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
            <a className={styles.aboutLink} href="mailto:borisblack@hotmail.com">
              Boris Black
            </a>
            <br></br>
             welcomes new ideas and new connections for filmmaking and bringing human visions
            together. 
            <br></br>
            Have a project or idea to film? <br></br>Simply <a className={styles.aboutLink} href="mailto:borisblack@hotmail.com">email </a> him or call 617.429.1955
          </p>
          <p>
            Cinematographer from Los Angeles{" "}
            <a className={styles.aboutLink} href="http://www.corywarner.com/">
              Corey Warner
            </a>
            
              {' '}is a driven,  passionate, creative talent and his{" "}
            <a className={styles.aboutLink} href="http://www.corywarner.com/">
              cinematography
            </a>{" "}
            work speaks for itself.
            <br></br> 
            
            Their recent film{" "}
            <a
              className={styles.aboutLink}
              href="https://www.youtube.com/watch?v=Cqe13_kR6KQ"
            >
              'The Usual Route'
            </a>{" "}
            came into a success with film festivals awards and recognitions and love from the audience. 
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
