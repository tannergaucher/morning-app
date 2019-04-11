import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import Title from "../components/styles/Title"

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
        <Title title={`Good Morning.`} />
      </Content>
      <BackgroundImg
        fluid={image.childImageSharp.fluid}
        imgStyle={{ height: "100vh" }}
      />
      <Nav previous="exercise" next="silence" />
    </Layout>
  )
}
