import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Carousel, Heading, Layer, Button } from "grommet"
import { Close } from "grommet-icons"
import PageTransition from "gatsby-plugin-page-transitions"

import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import Title from "../components/styles/Title"

export default function visualization() {
  const { file: image } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/visualization.jpg/" }) {
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
          <Title title="Visualization" />
        </Content>
        <BackgroundImg fluid={image.childImageSharp.fluid} />
        <Nav previous="silence" next="writing" />
      </Layout>
    </PageTransition>
  )
}
