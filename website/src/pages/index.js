import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Home from "./home"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Home/>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
