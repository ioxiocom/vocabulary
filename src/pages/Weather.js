import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Weather = () => (
  <Layout>
    <SEO title="Weather vocabulary" />
    <h1>Life Engine vocabulary - Weather</h1>
      <a name={"rain"}><h2>Rain</h2></a>
      <p>Simply states if it's raining or not.</p>
      <a name={"windSpeed"}><h2>Wind Speed</h2></a>
      <p>The speed at which wind travels on ground level in m/s.</p>
      <a name={"windDirection"}><h2>Wind direction</h2></a>
      <p>Meteorological wind direction in degrees.</p>
  </Layout>
)

export default Weather
