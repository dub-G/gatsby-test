import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const homePage = () => {
    return (
        <Layout>
        <Head title="home"/>
        <div>
            <h1>Hello!</h1>
            <h2>I'm Luigi, looking for a cool dev?</h2>
            <Link to="/contact">Contact me</Link>
        </div>
        </Layout>
    )
}

export default homePage
