import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/LayoutHeader"
import Footer from "../components/LayoutFooter"
import ContentWrapper from "../components/ContentWrapper"
import theme from "../styles/theme-bossanova"
import { ThemeProvider } from "styled-components"
import GrobalStyle from "../styles/global"
import ArticleTagLabel from "../components/ArticleTagLabel"
import ArticleContent from "../components/ArticleContent"
import PrevNextArticle from "../components/PrevNextArticle"
import ArticleBio from "../components/ArticleBio"
import Toc from "../components/Toc"

const Content = styled.div`
  margin-top: 2em;
  display: flex;
  min-height: 85vh;
  align-items: flex-start;

  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    display: block;
  }
`
const MainWrapper = styled.div`
  width: calc(100% - ${props => props.theme.sizes.bioWidth} - 40px);
  margin-right: 40px;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`
const AsdideWrapper = styled.div`
  position: sticky;
  top: 1em;
  width: ${props => props.theme.sizes.bioWidth};
  height: 100%;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`

// const LayoutArticle = ({ children, title, location }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Grobal>
//         <Header title={title} location={location} />
//         <ContentWrapper>
//           <Content>
//             <MainWrapper>
//               <main>{children}</main>
//             </MainWrapper>
//             <AsdideWrapper>
//               <ArticleBio />
//             </AsdideWrapper>
//           </Content>
//         </ContentWrapper>
//         <Footer />
//         <GrobalStyle />
//       </Grobal>
//     </ThemeProvider>
//   )
// }

const PostPageTemplate = ({ data, pageContext, location, title }) => {
  const mdx = data.mdx
  return (
    <ThemeProvider theme={theme}>
      <Header title={title} location={location} />
      <ContentWrapper>
        <Content>
          <MainWrapper>
            <main>
              <h1>{data.mdx.frontmatter.title}</h1>
              <time>{data.mdx.frontmatter.date}</time>
              <ArticleTagLabel slug={mdx.frontmatter.tags} isLink="true" />
              <hr />
              <ArticleContent post={mdx} />
              <PrevNextArticle
                prev={pageContext.prev}
                next={pageContext.next}
              />
              <hr />
            </main>
          </MainWrapper>
          <AsdideWrapper>
            <Toc headings={mdx.tableOfContents.items} />
            <ArticleBio />
          </AsdideWrapper>
        </Content>
      </ContentWrapper>
      <Footer />
      <GrobalStyle />
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
      }
      tableOfContents
    }
  }
`

export default PostPageTemplate
