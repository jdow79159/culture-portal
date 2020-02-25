import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"

const Worklog = ({ location }) => {
  const { markdownRemark } = useStaticQuery(graphql`
  {
    markdownRemark(frontmatter: {type: {eq: "worklog"}}) {
        frontmatter {
          features {
            feat
            fields {
              date
              developer
              description
              time
            }
          }
        }
      }
  }
  `)

  const { frontmatter } = markdownRemark
  const { features } = frontmatter
  console.log('worklog', features)

  return (
    <Layout location={location}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">feature</th>
            <th scope="col">date</th>
            <th scope="col">developer</th>
            <th scope="col">description</th>
            <th scope="col">time</th>
          </tr>
        </thead>
        <tbody>
          {features.map((el) => {
            return (
              <tr>
                <td>{el.feat}</td>
                <td>{el.fields.date}</td>
                <td>{el.fields.developer}</td>
                <td>{el.fields.description}</td>
                <td>{el.fields.time}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout>
  )
}

export default Worklog
