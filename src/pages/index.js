import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Life Engine vocabulary"/>
        <h1>Life Engine vocabulary</h1>
        <ul>
            <li><Link to="/weather/">Weather vocabulary</Link></li>
        </ul>
    </Layout>
)

export default IndexPage
