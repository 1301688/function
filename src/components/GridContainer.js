import React from "react"
import styled from "styled-components"

const ArticleCardBox = styled.div`
  margin: 1.68rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.68em 1.68em;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const GridContainer = ({ children }) => {
  return <ArticleCardBox>{children}</ArticleCardBox>
}

export default GridContainer
