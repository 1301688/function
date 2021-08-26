const title = `Learning record using Gatsby.js`
const author = `author`
const siteDomain = `goofy-jang-cc6f10.netlify.app`
const siteUrl = `https://${siteDomain}`
const description = `Description`

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: title,
    author: author,
    description: description,
    siteUrl: siteUrl,
    social: {
      twitter: `Twitter`,
    },
    tags: [
      {
        name: `One`,
        slug: `one`,
        color: `#FF9999`,
      },
      {
        name: `Two`,
        slug: `two`,
        color: `#99FFFF`,
      },
      {
        name: `Three`,
        slug: `three`,
        color: `#FFFF99`,
      },
      {
        name: `Four`,
        slug: `four`,
        color: `#99FF99`,
      },
      {
        name: `Five`,
        slug: `five`,
        color: `#CC99FF`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`, // Specify the horizontal offset position (unit is pixel)
              className: `urlhash-class`, // Class name of A tag to be added
              maintainCase: true, // Uppercase the letters of the URL fragment to be given
              removeAccents: true, // Remove accent from ID in generated HEADING tag
              isIconAfterHeader: true, // Give icon
              elements: [`h1`, `h2`, `h3`, `h4`], // Which tag to target
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 680,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
  ],
}
