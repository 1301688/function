import React from "react"
import styled from "styled-components"
import { StaticQuery, Link, graphql } from "gatsby"
import ContentWrapper from "./ContentWrapper"

const FooterTag = styled.footer`
  width: 100%;
  padding: 16px 0;
`
const FooterInner = styled.div`
  margin-top: 3em;
  text-align: center;
  padding: 1.5em;
  border-top: solid 1px ${props => props.theme.colors.footerLine};
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  a {
    color: ${props => props.theme.colors.link};
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              author
              siteUrl
            }
          }
        }
      `}
      render={data => (
        <FooterTag>
          <ContentWrapper>
            <FooterInner>
              <Link to="/">Home</Link>
              <div>
                © {new Date().getFullYear()},{data.site.siteMetadata.author} All
                rights reserved.
              </div>
            </FooterInner>
          </ContentWrapper>
        </FooterTag>
      )}
    />
  )
}

export default Footer
