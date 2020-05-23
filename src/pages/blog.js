import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"


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
                    fields {
                        slug
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
                {data.allMarkdownRemark.edges.map((edge) => {
                    return( 
                    <li key={Math.random()}>
                        <Link to={`/blog/${ edge.node.fields.slug }`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
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

