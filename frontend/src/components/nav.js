import React from "react"
import { Box, Button, Clock } from "grommet"
import { Next, Previous } from "grommet-icons"
import { navigate } from "@reach/router"

export default function nav({ previous, next }) {
  return (
    <Box
      direction="row"
      pad="large"
      justify="between"
      fill="horizontal"
      style={{ position: "absolute", bottom: 0 }}
    >
      <Button
        icon={<Previous />}
        plain={true}
        onClick={() => navigate(`/${previous}`)}
      />

      <Box background="rgba(0, 0, 0, .2)" pad="xsmall">
        <Clock type="digital" />
      </Box>

      <Button
        icon={<Next />}
        plain={true}
        onClick={() => navigate(`/${next}`)}
      />
    </Box>
  )
}
