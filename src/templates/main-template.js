import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DayAuthor from "../components/DayAuthor/DayAuthor"
import { graphql } from "gatsby"

const Main = ({ data, location, pageContext }) => {
  const authorData = data.dayAuthor.nodes;
  const getData = name => {
    const { about } = data
    const { lang: currentLang } = pageContext
    return about.frontmatter.fields.find(el => el.fieldName === name).fieldData[
      currentLang
    ]
  }

  const header = getData("portalDescriptionLabel")
  const content = getData("portalDescriptionData")
  const author = getData("authorOfTheDay");
  const labelMore = getData("labelMore")
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <section>
        <div>
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </section>
      <section>
        <h2>{author}</h2>
        <DayAuthor authorsList={authorData} labelMore={labelMore} />
      </section>
    </Layout>
  )
}

export default Main

export const query = graphql`
  query($lang: String!) {
    dayAuthor: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "director" }, lang: { eq: $lang } } }
      sort: { fields: [frontmatter___imageName] }
    ) {
      nodes {
        frontmatter {
          city
          directorsLifeYears
          title
          titleText
          imagepath
          imageName
        }
      }
    }
    about: markdownRemark(
      frontmatter: { type: { eq: "page" }, name: { eq: "main" } }
    ) {
      frontmatter {
        fields {
          fieldName
          fieldData {
            ru
            be
            en
          }
        }
      }
    }
  }
`
