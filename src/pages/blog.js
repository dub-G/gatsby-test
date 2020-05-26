import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
        query {
          allContentfulBlogPost ( sort: { fields:publishedDate, order:DESC } ) {
            edges {
              node {
                title
                slug
                publishedDate ( formatString:"MMM Do, YYYY" )
              }
            }
          }
        }
  `)

   return (
        <Layout>
            <div>
                <h1>Blog</h1>
                <p>this is all you you need to knwo</p>
                <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return(
                    <li className={blogStyles.post} key={Math.random()}>
                        <Link to={`/blog/${ edge.node.slug }`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                    )})
                }
                </ol>
            </div>
        </Layout>
    )
}



export default BlogPage


// const BlogPage = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         frontmatter {
//                         title
//                         date
//                         }
//                     fields {
//                         slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     return (
//         <Layout>
//             <div>
//                 <h1>Blog</h1>
//                 <p>this is all you you need to knwo</p>
//                 <ol className={blogStyles.posts}>
//                 {data.allMarkdownRemark.edges.map((edge) => {
//                     return(
//                     <li className={blogStyles.post} key={Math.random()}>
//                         <Link to={`/blog/${ edge.node.fields.slug }`}>
//                             <h2>{edge.node.frontmatter.title}</h2>
//                             <p>{edge.node.frontmatter.date}</p>
//                         </Link>
//                     </li>
//                     )})
//                 }
//                 </ol>
//             </div>
//         </Layout>
//     )
// }


