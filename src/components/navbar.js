import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/blog">blog</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    )
}

export default Navbar