import React from "react"
import Header from "./LayoutHeader"
import Footer from "./LayoutFooter"
import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"
import theme from "../styles/theme-bossanova"
import { ThemeProvider } from "styled-components"
import GrobalStyle from "../styles/global"

const Grobal = styled.div`
  background-color: ${props => props.theme.colors.body};
`
const Content = styled.div`
  margin-top: 2em;
  display: flex;
  min-height: 85vh;
  align-items: flex-start;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    display: block;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 0;
  }
`
const MainWrapper = styled.div`
  width: calc(100% - ${props => props.theme.sizes.bioWidth} - 40px);
  margin-right: 40px;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`

const LayoutArticle = ({ children, title, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grobal>
        <Header title={title} location={location} />
        <ContentWrapper>
          <Content>
            <MainWrapper>
              <main>{children}</main>
            </MainWrapper>
          </Content>
        </ContentWrapper>
        <Footer />
        <GrobalStyle />
      </Grobal>
    </ThemeProvider>
  )
}

export default LayoutArticle
