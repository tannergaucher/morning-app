import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layer, Box, Button, Heading } from "grommet"
import { Close } from "grommet-icons"

import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import MainText from "../components/styles/mainText"

import CreateAffirmation from "../containers/createAffirmation"

export default function affirmations() {
  const { file: image } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/affirmation.jpg/" }) {
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
        <MainText
          title="Affirmations"
          subtitle="Read your list of affirmations"
        />
        <ReadModal />
        <CreateModal />
      </Content>
      <BackgroundImg fluid={image.childImageSharp.fluid} />
      <Nav previous="silence" next="visualization" />
    </Layout>
  )
}

const ReadModal = () => {
  const [show, setShow] = useState(false)
  return (
    <Box>
      <Button
        label="Read Affirmations"
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
            map affirmations here
            {/*  */}
          </Box>
        </Layer>
      )}
    </Box>
  )
}

const CreateModal = () => {
  const [show, setShow] = useState(false)
  return (
    <Box>
      <Button
        label="+ Affirmation"
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
            <CreateAffirmation />
          </Box>
        </Layer>
      )}
    </Box>
  )
}
