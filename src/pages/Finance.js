import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Finance = () => (
  <Layout>
    <SEO title="Finance vocabulary" />
    <h1>Life Engine vocabulary - Finance</h1>
    <a name={"insuranceValue"}>
      <h2>Insurance value</h2>
    </a>
    <p>The value of insured items.</p>
    <a name={"insuranceValuePercentage"}>
      <h2>Percentage of insurance value</h2>
    </a>
    <p>The maximum value the insurer will pay in case of damage or loss of the insured items in percentage unit.</p>
    <a name={"instituteClauses"}>
      <h2>Institute clauses</h2>
    </a>
    <p>Type of clauses to specify which damages of insured items are covered and not covered by the insurer.</p>
    <a name={"letterOfCreditValue"}>
      <h2>Letter of credit value</h2>
    </a>
    <p>Value of the letter of credit instrument being used to finance a transaction between a buyer and a seller.</p>
    <a name={"advisingBankReference"}>
      <h2>Advising bank reference</h2>
    </a>
    <p>A reference code assigned by the advising bank to the letter of credit instrument.</p>
  </Layout>
)

export default Finance
