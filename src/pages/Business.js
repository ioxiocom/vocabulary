import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Business = () => (
  <Layout>
    <SEO title="Business vocabulary" />
    <h1>Life Engine vocabulary - Business</h1>
    <a name={"registrationDate"}>
      <h2>Registration Date</h2>
    </a>
    <p>Date of registration of the company</p>
    <a name={"ownership"}>
      <h2>Ownership</h2>
    </a>
    <p>A state or a fact of possessing something</p>
    <a name={"totalShares"}>
      <h2>TotalShares</h2>
    </a>
    <p>A total number of shares issued to a share series</p>
    <a name={"quantity"}>
      <h2>Quantity</h2>
    </a>
    <p>Sum of countable or measurable discrete items</p>
    <a name={"shareSeries"}>
      <h2>ShareSeries</h2>
    </a>
    <p>
      Provided there are special rights and restrictions attached to the class
      of shares, you can add any number of share series. The number of shares in
      all the series cannot exceed the number of shares in the class.
    </p>
  <a name={"incoterm"}>
      <h2>Incoterm</h2>
    </a>
    <p>International commerce terms that the buyer and seller use in international and domestic trade defined by the International Chamber of Commerce</p>
  </Layout>
)

export default Business
