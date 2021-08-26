import React from "react"
import { graphql, Link } from "gatsby"
import LayoutMain from "../components/LayoutMain"
import styled from "styled-components"

const LinkList = styled(Link)`
  display: block;
`

const SecondPage = ({ data, location }) => {
  return (
    <LayoutMain location={location}>
      <h1>SecondPage</h1>
      <LinkList to="/">to Home</LinkList>
      <LinkList to="/thirdpage">to ThirdPage</LinkList>
      <p>Hello World</p>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>name</th>
            <th>size</th>
            <th>accessTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.nodes.map(node => (
            <tr>
              <td>{node.relativePath}</td>
              <td>{node.name}</td>
              <td>{node.size}</td>
              <td>{node.accessTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </LayoutMain>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    allFile {
      totalCount
      nodes {
        relativePath
        name
        size
        accessTime
      }
    }
  }
`

export default SecondPage
