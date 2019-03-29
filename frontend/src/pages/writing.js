import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import MainText from "../components/styles/mainText"

export default function writing() {
  const { file: image } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/writing.jpg/" }) {
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
      <Content>
        <MainText title="Writing" subtitle="Make an entry in your journal" />
      </Content>
      <BackgroundImg fluid={image.childImageSharp.fluid} />
      <Nav previous="visualization" next="reading" />
    </Layout>
  )
}
