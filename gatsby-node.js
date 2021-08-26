// JavaScriptのpathモジュールをrequireしている
const path = require(`path`)
// 便利な関数をまとめて提供しているライブラリ`lodash`を宣言
const _ = require("lodash")
// slugに不要な情報が含まれているのでcreateFilePathを利用してslugの形を変更する
const { createFilePath } = require(`gatsby-source-filesystem`)

// 動的ページの作成スタート
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // テンプレートファイルを定数化
  const postPageTemplate = path.resolve(`src/templates/post.js`)
  const tagPageTemplate = path.resolve(`src/templates/tag.js`)
  // Queryにエイリアス付けてるところに注意
  // ↓1 MDXのデータを取ってくる
  const result = await graphql(`
    {
      postsRemark: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/content/" } }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  // posts定数(MDX全記事)を宣言
  // forEachで回して単体引数post(MDX単体記事)のdataを取得している
  const posts = result.data.postsRemark.edges

  posts.forEach((post, index) => {
    // ページ生成時に前後の記事情報を渡す
    const prev = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `${post.node.fields.slug}`,
      component: postPageTemplate,
      context: {
        slug: post.node.fields.slug,
        prev,
        next,
      },
    })
  })

  // Create tags pages.
  // categories定数(カテゴリ全部)を宣言　※GraphQLですでにグルーピング済み
  // ※130sphereではひとつのGraphQLからデータ取得しているため、一旦空の配列変数を用意してforEachで回してpushして、setしてnewしてまたforEachで回してcreatePageにデータをわたしている
  // forEachで回して単体引数category(カテゴリ単体)のdataを取得している
  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagPageTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    //slugをcreateNodeField メゾットで node に追加を行う
    createNodeField({
      node,
      name: `slug`,
      value,
    })
  }
}
