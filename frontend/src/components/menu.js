import React, { useState } from "react"
import { Layer, Box, Button, Accordion, AccordionPanel, Heading } from "grommet"

import { UserSettings, Close } from "grommet-icons"
import { useQuery } from "react-apollo-hooks"

import CURRENT_USER_QUERY from "../graphql/queries/user"
import ToggleAuth from "./toggleAuth"

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
          onClickOutside={handleClose}
          onEsc={handleClose}
          style={{ overflowY: "scroll" }}
        >
          <Button icon={<Close />} onClick={handleClose} alignSelf="end" />
          <Box pad="medium">
            <ToggleAuth />
            <MyAccordion />
          </Box>
        </Layer>
      )}
    </>
  )
}

const MyAccordion = () => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)
  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>
  if (!data.me) return null

  return (
    <Accordion>
      {data.me.affirmations && (
        <AccordionPanel label={"Affirmations"}>
          <Box pad={{ vertical: "xsmall" }} pad="small">
            <AffirmationsList affirmations={data.me.affirmations} />
          </Box>
        </AccordionPanel>
      )}
    </Accordion>
  )
}

const AffirmationsList = ({ affirmations }) => {
  return (
    <Box>
      {affirmations.map(affirmation => (
        <Box
          key={affirmation.id}
          margin={{ vertical: "xsmall" }}
          background="light-1"
          pad="xsmall"
        >
          <Heading level={4}>{affirmation.text}</Heading>
        </Box>
      ))}
    </Box>
  )
}
