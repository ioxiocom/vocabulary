import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Measures = () => (
  <Layout>
    <SEO title="Measures vocabulary" />
    <h1>Life Engine vocabulary - Weather</h1>
    <a name={"length"}>
      <h2>Lenght</h2>
    </a>
    <p>The measure of an item from end to end in centimeters.</p>
    <a name={"volume"}>
      <h2>Volume</h2>
    </a>
    <p>The measure of an item in terms of space that it occupies in cubic meters.</p>
    <a name={"totalVolume"}>
      <h2>Total volume</h2>
    </a>
    <p>The measure of several items in terms of space that they occupy in cubic meters.</p>
  </Layout>
)

export default Measures
