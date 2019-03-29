import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import MainText from "../components/styles/mainText"

export default function index() {
  const { file: image } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/good-morning.jpg/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`miracle morning`, `productivity`, `progressive web app`]}
      />
      <Content>
        <MainText title="Good Morning, Tanner" subtitle="Make today count" />
      </Content>
      <BackgroundImg
        fluid={image.childImageSharp.fluid}
        imgStyle={{ height: "100vh" }}
      />
      <Nav previous="exercise" next="silence" />
    </Layout>
  )
}
