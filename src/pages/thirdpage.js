import React from "react"
import { graphql, Link } from "gatsby"
import LayoutMain from "../components/LayoutMain"
import styled from "styled-components"

const LinkList = styled(Link)`
  display: block;
`
const ThirdPage = ({ data, location }) => {
  return (
    <LayoutMain location={location}>
      <h1>ThirdPage</h1>
      <p>Hello World</p>
      <LinkList to="/">to Home</LinkList>
      <LinkList to="/secondpage">to SecondPage</LinkList>
      {data.allMdx.edges.map(edge => (
        <div key={edge.node.id}>
          <Link to={edge.node.fields.slug}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
          <p>{edge.node.frontmatter.tags}</p>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.frontmatter.description}</p>
          <p>{edge.node.frontmatter.emoji}</p>
          <p>{edge.node.frontmatter.topimage}</p>
          <p>{edge.node.frontmatter.category}</p>
          <p>{edge.node.frontmatter.updateDate}</p>
        </div>
      ))}
    </LayoutMain>
  )
}

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            date(formatString: "MMMM DD, YY")
            description
            emoji
            title
            topImage
            category
            updateDate
          }
        }
      }
    }
  }
`

export default ThirdPage
