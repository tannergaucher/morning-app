import React from "react"
import { Heading, Box } from "grommet"

const TextBackground = ({ children }) => (
  <span
    style={{
      background: "rgba(0, 0, 0, .4)",
      padding: ".2em",
      borderRadius: "2px",
    }}
  >
    {children}
  </span>
)

export default function mainText({ title }) {
  return (
    <Heading
      color="white"
      level={1}
      alignSelf="center"
      margin={{ vertical: "xlarge" }}
    >
      <Box elevation="large">
        <TextBackground> {title}</TextBackground>
      </Box>
    </Heading>
  )
}
