import React, { useState } from "react"
import { Box, Button, Form, FormField } from "grommet"

export default function signin() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Box>
      <Form>
        <FormField
          name="email"
          label="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormField
          name="name"
          label="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <FormField
          name="password"
          label="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" label="Sign Up" />
      </Form>
    </Box>
  )
}
