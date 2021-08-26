import React from "react"
import { graphql } from "gatsby"
import LayoutMain from "../components/LayoutMain"
import ArticleCardOne from "../components/ArticleCardOne"
import GridContainerOne from "../components/GridContainerOne"

const TagPageTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges: articles, totalCount } = data.tagArticles

  return (
    <LayoutMain location={location}>
      <h1>
        {tag} ({totalCount}case)
      </h1>
      <GridContainerOne>
        {articles.map(({ node: article }) => {
          return <ArticleCardOne key={article.fields.slug} article={article} />
        })}
      </GridContainerOne>
    </LayoutMain>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query($tag: String) {
    tagArticles: allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true, pruneLength: 500)
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`
