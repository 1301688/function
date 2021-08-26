import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import LayoutMain from "../components/LayoutMain"
import styled from "styled-components"
import "../styles/class.css"
import Test from "../images/sample.svg"
import ArticleCard from "../components/ArticleCard"
import ArticleTagMenu from "../components/ArticleTagMenu"
import GridContainer from "../components/GridContainer"

// 最終的にindex.jsにはstyle当てない
const Container = styled.div`
  .on-class {
    color: blue;
  }
`

const Home = ({ data, location }) => {
  const articles = data.allMdx.edges
  return (
    <Container>
      <LayoutMain location={location}>
        <ArticleTagMenu location={location}></ArticleTagMenu>
        <h2>{data.site.siteMetadata.title}</h2>
        <h1>Home</h1>
        <div>Give styles from styled-compoents</div>
        <div className="on-class">
          Add style from styled-compoent class specification
        </div>
        <div className={`container`}>Give style by quoting from class.css</div>
        <Link to="/secondpage" style={{ display: "block" }}>
          to SecondPage
        </Link>
        <Link to="/thirdpage" style={{ display: "block" }}>
          to ThirdPage
        </Link>
        <GridContainer>
          {articles.map(({ node }) => {
            return <ArticleCard key={node.fields.slug} node={node} />
          })}
        </GridContainer>
        <img src={Test} alt="test" />
        <img src={Test} alt="test" />
      </LayoutMain>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
        social {
          twitter
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          body
          frontmatter {
            category
            date(formatString: "YYYY.MM.DD")
            description
            emoji
            tags
            title
            topImage
            updateDate
          }
          timeToRead
        }
      }
    }
  }
`
export default Home
