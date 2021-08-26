import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Test from "../images/sample.svg"

const BioWrapper = styled.div`
  margin-top: 2em;
  width: 100%;
  padding: 1.3em 1em;
  background: ${props => props.theme.colors.bio};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    position: relative;
    margin: 2em 0;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1.3em 1em;
  }
`
const BioHeader = styled.div`
  display: flex;
  align-items: center;
`
const BioName = styled.div``
const BioMain = styled.div`
  margin-top: 0.5em;
`
const BioText = styled.p`
  color: ${props => props.theme.colors.font};
  font-size: 0.92em;
`
const BioLinks = styled.div`
  margin-top: 1.3em;
  max-width: 244px;
  a {
    color: ${props => props.theme.colors.link};
  }
  img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 33px;
  }
`
// The style of index.js has a little influence
const BioLink = styled.a`
  display: flex;
  width: 100%;
  font-weight: 600;
  font-size: 1em;
  line-height: 30px;
  text-align: center;
  color: ${props => props.theme.colors.font};
  letter-spacing: 0.5px;
  &:hover {
    color: ${props => props.theme.colors.linkHover};
  }
`

const ArticleBio = () => {
  const { siteUrl, author } = useSiteMetadata()
  return (
    <BioWrapper>
      <BioHeader>
        <BioName>{author}</BioName>
      </BioHeader>
      <BioMain>
        <BioText>Site description</BioText>
        <BioLinks>
          <BioLink href={siteUrl}>
            <img src={Test} alt="test" />
            <img src={Test} alt="test" />
            <img src={Test} alt="test" />
            <img src={Test} alt="test" />
            <img src={Test} alt="test" />
          </BioLink>
        </BioLinks>
      </BioMain>
    </BioWrapper>
  )
}

export default ArticleBio
