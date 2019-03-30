import React, { useState } from "react"
import { Layer, Box, Text, Button } from "grommet"
import { UserSettings, Close } from "grommet-icons"

import Link from "../components/styles/Link"
import Signout from "../containers/signout"

export default function menu() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        icon={<UserSettings />}
        onClick={handleOpen}
        style={{ position: "absolute", top: 0, right: 0, zIndex: 2 }}
      />
      {open && (
        <Layer
          position="right"
          full="vertical"
          modal={false}
          onClickOutside={handleClose}
          onEsc={handleClose}
        >
          <Button icon={<Close />} onClick={handleClose} alignSelf="end" />
          <Box pad="medium" align="center">
            <Link to={"/"}>
              <Text>Home</Text>
            </Link>
            <Link to={"/signin"}>
              <Text>Sign in</Text>
            </Link>
            <Signout />
          </Box>
        </Layer>
      )}
    </>
  )
}
