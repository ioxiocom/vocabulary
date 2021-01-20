import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = () => (
  <Layout>
    <SEO title="Product vocabulary" />
    <h1>Life Engine vocabulary - Product</h1>
    <a name={"productCode"}>
      <h2>Product code</h2>
    </a>
    <p>A unique identifier of a product.</p>
    <a name={"packingReference"}>
      <h2>Packing reference</h2>
    </a>
    <p>A reference code assigned to a packing operation of shipped items.</p>
 
  </Layout>
)

export default Product
