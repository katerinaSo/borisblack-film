import React from "react"
import Img from "gatsby-image"
import styles from "../../css/film.module.css"
import { FaVideo } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ film }) => {
  const { name, price, location, slug, images } = film
  return (
    <article className={styles.film}>
      <div className={styles.imgContainer}>
        <Img
          fluid={images[0].fluid}
          className={styles.images}
          alt="project type"
        />
        {/* <AniLink fade className={styles.link} to="/films">
          {name}
        </AniLink> */}
      </div>
      <div className={styles.footer}>
          <h3>{name}</h3>

      </div>
    </article>
  )
}
