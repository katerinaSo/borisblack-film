import React from "react"
import Film from "../Films/film"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getFilms = graphql`
  query {
    featuredFilms: allContentfulFilmProject(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          price
          slug
          location
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default () => {
  const response = useStaticQuery(getFilms)
  const films = response.featuredFilms.edges
  return (
    <section className={styles.films}>
      <Title title="we" subtitle="film" />
      <div className={styles.center}>
      {films.map(({ node }) => {
        return <Film key={node.contentful_id} film={node} />
      })}

      </div>


      

      <AniLink to="/contact" className="btn-primary">
        your idea
      </AniLink>
    </section>
  )
}
