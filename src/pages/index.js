import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Life Engine vocabulary" />
    <h1>Life Engine vocabulary</h1>
    <ul>
      <li>
        <Link to="/Weather/">Weather vocabulary</Link>
      </li>
      <li>
        <Link to="/Business/">Business vocabulary</Link>
      </li>
      <li>
        <Link to="/Legislation/">Legislation vocabulary</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
