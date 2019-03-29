import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import MainText from "../components/styles/mainText"

export default function exercise() {
  const { file: image } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/exercise.jpg/" }) {
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
        <MainText title="Exercise" subtitle="Get up and move for 60 seconds" />
      </Content>
      <BackgroundImg fluid={image.childImageSharp.fluid} />
      <Nav previous="reading" next="" />
    </Layout>
  )
}
