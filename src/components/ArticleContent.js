import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

const ArticleContent = ({ post }) => {
  return (
    <MDXProvider>
      <MDXRenderer>{post.body}</MDXRenderer>
    </MDXProvider>
  )
}

export default ArticleContent
