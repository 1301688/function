import React from "react"
import styled from "styled-components"
import TagLabel from "../components/ArticleTagLabel"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeather } from "@fortawesome/free-solid-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

const OneArticle = styled.div`
  border-radius: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  background: ${props => props.theme.colors.articleBody};
`
const ArticleWrapper = styled.div`
  position: relative;
  text-align: center;
  border-radius: 9px;
  .article-card-link {
    text-decoration: none;
  }
`
const ThumbnailContainer = styled.div`
  padding: 16px 0;
  font-size: 20px;
  line-height: 1.5;
  border-radius: 9px 9px 0 0;
  background: ${props => props.theme.colors.header};
  text-align: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 0.8em;
  }
`
const ArticleTitle = styled.h3`
  margin: 0.4em 0.3em;
  font-size: 0.7em;
  font-weight: 600;
  line-height: 1.5;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    font-size: 0.6em;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 0.5em;
  }
`
const ArticleText = styled.p`
  margin: 0.4em 0.3em;
  font-size: 1em;
  line-height: 1.5;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 0.8em;
  }
`
const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  color: ${props => props.theme.colors.articleMetaFont};
  margin: 0 auto;
  font-size: 0.8em;
  line-height: 1.3;
  padding-bottom: 15px;
`
const Label = styled.span`
  margin: 0.6rem 0.6rem 0;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
`
const ArticlePubdate = styled.span`
  margin: 0.6rem 0.6rem 0;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
`
const ArticleUpdate = styled.span`
  margin: 0.6rem 0.6rem 0;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
`
const ArticleMin = styled.span`
  margin: 0.6rem 0.6rem 0;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
`
const Svg = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.articleMetaFont};
  width: 1.6em;
  height: 1.6em;
  margin-right: 0.35em;
`
const ArticleDate = styled.time`
  display: block;
  color: ${props => props.theme.colors.articleMetaFont};
  font-size: 0.8em;
  letter-spacing: 0.06em;
`

const ArticleCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const date = node.frontmatter.date
  const updateDate = node.frontmatter.updateDate

  return (
    <OneArticle>
      <ArticleWrapper>
        <Link to={node.fields.slug} className="article-card-link">
          <ThumbnailContainer>
            <div>Thumbnail</div>
          </ThumbnailContainer>
          <ArticleTitle>{title}</ArticleTitle>
        </Link>
        <ArticleText>ArticleText</ArticleText>
        <ArticleMeta>
          <Label>
            <TagLabel slug={node.frontmatter.tags} isLink="true" />
          </Label>
          <ArticlePubdate>
            <Svg icon={faFeather} />
            <ArticleDate>{date}</ArticleDate>
          </ArticlePubdate>
        </ArticleMeta>
        <ArticleMeta>
          <ArticleUpdate>
            <Svg icon={faSpinner} />
            <ArticleDate>{updateDate ? updateDate : "No update"}</ArticleDate>
          </ArticleUpdate>
          <ArticleMin>
            <Svg icon={faClock} />
            <ArticleDate>{`${node.timeToRead} min read`}</ArticleDate>
          </ArticleMin>
        </ArticleMeta>
      </ArticleWrapper>
    </OneArticle>
  )
}

export default ArticleCard
