import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/styles/Content"
import Nav from "../components/nav"
import BackgroundImg from "../components/styles/BackgroundImage"
import MainText from "../components/styles/mainText"

// can use useStaticQuery inside page component
// cannot use variable on useStaticQuery
// https://www.gatsbyjs.org/docs/use-static-query/

export default function silence() {
  const { file: image } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/silence.jpg/" }) {
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
          title="Silence"
          subtitle="Take a moment to notice that you've woken up"
        />
      </Content>
      <BackgroundImg fluid={image.childImageSharp.fluid} />
      <Nav previous="" next="affirmations" />
    </Layout>
  )
}