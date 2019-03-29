import React, { useState } from "react"
import { Box, Button, Form, FormField } from "grommet"

export default function signin() {
  const [email, setEmail] = useState("")
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
          name="password"
          label="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" label="Sign In" />
      </Form>
    </Box>
  )
}
