import React from "react"
import { Heading, Text } from "grommet"

const TextBackground = ({ children }) => (
  <span style={{ background: "rgba(0, 0, 0, .5)" }}>{children}</span>
)

export default function mainText({ title, subtitle }) {
  return (
    <>
      <Heading margin="none" color="white" level={1}>
        <TextBackground> {title}</TextBackground>
      </Heading>
      <Text
        margin="none"
        color="white"
        size="medium"
        margin={{ vertical: "large" }}
      >
        <TextBackground>{subtitle}</TextBackground>
      </Text>
    </>
  )
}
