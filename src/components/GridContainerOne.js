import React from "react"
import styled from "styled-components"

const ArticleCardBox = styled.div`
  margin: 1.68rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.68em 1.68em;
`

const GridContainerOne = ({ children }) => {
  return <ArticleCardBox>{children}</ArticleCardBox>
}

export default GridContainerOne
