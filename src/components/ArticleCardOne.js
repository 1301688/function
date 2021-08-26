import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const OneArticleWrapper = styled.div`
  display: flex;
  align-items: start;
  box-sizing: border-box;
  background: ${props => props.theme.colors.body};
`
const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 130px;
  height: 130px;
  border-radius: 9px;
  font-size: 20px;
  background: ${props => props.theme.colors.header};
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    font-size: 0.8em;
    width: 100px;
    height: 100px;
  }
`
const ArticleContentWrapper = styled.div`
  width: calc(100% - 90px);
  padding-left: 20px;
  h3 {
    font-size: 1.3em;
    font-weight: 600;
    line-height: 1.4;
  }
  p {
    display: block;
    margin-bottom: 0.2em;
    letter-spacing: 0.05em;
    font-size: 0.7em;
    height: 3.6rem;
    overflow: hidden;
    opacity: 0.7;
    color: ${props => props.theme.colors.font};
  }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: calc(100% - 70px);
    padding-left: 15px;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.5rem;
      height: 2.5rem;
    }
  }
`
const ArticleTitle = styled.h3`
  margin: 0.3rem 0;
  text-align: center;
`
const ArticleText = styled.p`
  display: block;
  height: 3.6rem;
  overflow: hidden;
  opacity: 0.7;
`

const ArticleCardOne = ({ article }) => {
  const title = article.frontmatter.title || article.fields.slug
  return (
    <OneArticleWrapper>
      <ThumbnailContainer>
        <div>Thumbnail</div>
      </ThumbnailContainer>
      <ArticleContentWrapper>
        <Link to={article.fields.slug}>
          <ArticleTitle>{title}</ArticleTitle>
        </Link>
        <ArticleText>{article.excerpt}</ArticleText>
        <Link to={article.fields.slug}>Read more</Link>
      </ArticleContentWrapper>
    </OneArticleWrapper>
  )
}

export default ArticleCardOne
