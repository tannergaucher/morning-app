import React from "react"
import { Box } from "grommet"

export default function content({ children }) {
  return (
    <Box
      style={{ position: "absolute", zIndex: 1 }}
      pad="large"
      fill="horizontal"
    >
      {children}
    </Box>
  )
}
