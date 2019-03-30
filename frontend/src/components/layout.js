import React from "react"
import PropTypes from "prop-types"
import { Box, Grommet } from "grommet"
import GlobalStyles from "../components/styles/GlobalStyles"

import Menu from "../components/menu"

export default function Layout({ children }) {
  return (
    <Grommet>
      <GlobalStyles />
      <Box>
        <Menu />
        <main>{children}</main>
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
