import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const AllOutlineBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5em 0;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: block;
    padding: 1em 1em;
  }
`
const PrevBoxOutline = styled.div`
  width: 50%;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    width: 100%;
    margin: 1em 0;
  }
`
const NextBoxOutline = styled.div`
  width: 50%;
  //Should be brought to the right side of the BOX here
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    width: 100%;
    margin: 1em 0;
  }
`
const PrevThumbnail = styled.div`
  margin: 0 10px 0 0;
`
const NextThumbnail = styled.div`
  margin: 0 0 0 10px;
`
const PrevBox = styled.div`
  display: flex;
`
const NextBox = styled.div`
  display: flex;
`

const PrevNextArticle = ({ prev, next }) => (
  <AllOutlineBox>
    <PrevBoxOutline>
      {prev && (
        <PrevBox>
          <PrevThumbnail>←Prev Article</PrevThumbnail>
          <Link to={prev.fields.slug}>
            <p>{prev.frontmatter.title}</p>
          </Link>
        </PrevBox>
      )}
    </PrevBoxOutline>
    <NextBoxOutline>
      {next && (
        <NextBox>
          <Link to={next.fields.slug}>
            <p>{next.frontmatter.title}</p>
          </Link>
          <NextThumbnail>Next Article→</NextThumbnail>
        </NextBox>
      )}
    </NextBoxOutline>
  </AllOutlineBox>
)

export default PrevNextArticle
