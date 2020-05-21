import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                        title
                        date
                        }
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
                <ol>
                {data.allMarkdownRemark.edges.map((item) => {
                    return( 
                    <li key={Math.random()}>
                        <h2>{item.node.frontmatter.title}</h2>
                        <p>{item.node.frontmatter.date}</p>
                    </li>
                    )})
                }
                </ol>
            </div>
        </Layout>
    )
}

export default BlogPage

