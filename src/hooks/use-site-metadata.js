import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            social {
              twitter
            }
            tags {
              color
              name
              slug
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
