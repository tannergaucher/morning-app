import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import Title from "../components/styles/Title"

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
    <PageTransition>
      <Layout>
        <Content>
          <Title title="Exercise" />
        </Content>
        <BackgroundImg fluid={image.childImageSharp.fluid} />
        <Nav previous="reading" next="" />
      </Layout>
    </PageTransition>
  )
}
