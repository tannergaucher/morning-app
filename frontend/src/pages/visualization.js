import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Carousel, Heading, Layer, Button } from "grommet"
import { Close } from "grommet-icons"

import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import MainText from "../components/styles/mainText"

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
    <Layout>
      <Content>
        <MainText title="Visualization" subtitle="See it, do it" />
        <Modal />
      </Content>
      <BackgroundImg fluid={image.childImageSharp.fluid} />
      <Nav previous="silence" next="writing" />
    </Layout>
  )
}

const MyCarousel = () => (
  <Box>
    <Carousel>
      <Heading>What would it look like...?</Heading>
      <Heading>How would it feel to...?</Heading>
    </Carousel>
  </Box>
)

const Modal = () => {
  const [show, setShow] = useState(false)
  return (
    <Box>
      <Button
        label="Start"
        primary
        onClick={() => setShow(true)}
        alignSelf="center"
        margin={{ vertical: "large" }}
      />
      {show && (
        <Layer>
          <Button
            icon={<Close />}
            onClick={() => setShow(false)}
            alignSelf="end"
          />
          <Box pad="medium">
            <MyCarousel />
          </Box>
        </Layer>
      )}
    </Box>
  )
}
