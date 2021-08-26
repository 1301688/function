import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  .tag-text {
    padding: 0.3em 1em;
    display: inline-block;
    display: inline;
    padding: 3px 6px;
    line-height: 1.2;
    font-size: 0.8em;
    border-radius: 2px;
    font-weight: 600;
    color: ${props => props.theme.colors.font};
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
      font-size: 0.6em;
      padding: 2.5px 6px;
    }
  }
`

const ArticleTagLabel = ({ slug, isLink }) => {
  if (!slug) return null
  return (
    <StaticQuery
      query={tagQuery}
      render={data => {
        const { tags } = data.site.siteMetadata
        const tagObject = tags.find(tag => {
          return tag.slug === slug
        })
        const tagName = tagObject ? tagObject.name : slug
        const tagColor = tagObject ? tagObject.color : "#130130"
        const article = isLink ? (
          <Link
            to={`/tags/${slug}`}
            className="tag-taxt"
            style={{ background: tagColor }}
          >
            {tagName}
          </Link>
        ) : (
          <span className="tag-text" style={{ background: tagColor }}>
            {tagName}
          </span>
        )
        return <Wrapper>{article}</Wrapper>
      }}
    />
  )
}

const tagQuery = graphql`
  query tagQuery {
    site {
      siteMetadata {
        tags {
          name
          slug
          color
        }
      }
    }
  }
`

export default ArticleTagLabel
