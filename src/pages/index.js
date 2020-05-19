import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const homePage = () => {
    return (
        <Layout>
        <div>
            <div>Heolo world!</div>
            <Link to="/about">about</Link>
        </div>
        </Layout>
    )
}

export default homePage
