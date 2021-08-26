import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const BioWrapper = styled.div`
  position: sticky; // Bio fixed when scrolling
  top: 2em; // Top clearance when scrolling
  width: ${props => props.theme.sizes.bioWidth};
  padding: 0 1.3em; // Side only clearance
  background: ${props => props.theme.colors.bio}; // bio background color
  border-radius: 4px; // bio corner adjustment
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); // Bio 3D adjustment
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
  color: ${props => props.theme.colors.gray};
  font-size: 0.92em;
`
const BioLinks = styled.div`
  margin-top: 1.3em;
  display: flex;
  color: ${props => props.theme.colors.pineappleEarth};
  text-align: center;
  max-width: 244px;
  img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 33px;
  }
`
// The style of index.js has a little influence
const BioLink = styled.a`
  width: 33.3%;
  display: block;
  font-weight: 600;
  font-size: 0.5em;
  line-height: 30px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.5px;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

const Bio = () => {
  const { siteUrl, author } = useSiteMetadata()
  return (
    <BioWrapper>
      <BioHeader>
        <BioName>{author}</BioName>
      </BioHeader>
      <BioMain>
        <BioText>Site description</BioText>
        <BioLinks>
          <BioLink href={siteUrl}>one</BioLink>
          <BioLink href={siteUrl}>two</BioLink>
          <BioLink href={siteUrl}>three</BioLink>
        </BioLinks>
      </BioMain>
    </BioWrapper>
  )
}

export default Bio
