import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./navbar.module.scss"
import navBarStyle from "./navbar.module.scss"

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <nav className={navBarStyle.nav}>
            <h1>
                <Link to="/" className={navBarStyle.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <ul className={navBarStyle.navLinks}>
                <li><Link to="/" className={navBarStyle.link} activeClassName={navBarStyle.linkActive}>home</Link></li>
                <li><Link to="/blog" className={navBarStyle.link} activeClassName={navBarStyle.linkActive}>blog</Link></li>
                <li><Link to="/contact" className={navBarStyle.link} activeClassName={navBarStyle.linkActive}>contact</Link></li>
                <li><Link to="/about" className={navBarStyle.link} activeClassName={navBarStyle.linkActive}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar