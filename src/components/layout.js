import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = (props) => {
    return (
        <div>
            <Navbar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout