import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grommet } from "grommet"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Menu from "../components/menu"

const GlobalStyles = createGlobalStyle`
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export default function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              github
            }
          }
        }
      }
    `
  )

  return (
    <Grommet>
      <GlobalStyles />
      <Box>
        <Menu />
        {/* <Header siteTitle={site.siteMetadata.title} /> */}
        <main>{children}</main>
        {/* <footer>
          Made by
          <a href={`https://www.github.com/${site.siteMetadata.social.github}`}>
            Tanner
          </a>
        </footer> */}
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
