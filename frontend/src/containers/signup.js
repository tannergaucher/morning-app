import React, { useState } from "react"
import { Box, Button, Form, FormField } from "grommet"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

// TODO: MAKE THE USER QUERY A FRAGMENT, REUSE

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      user {
        id
        name
        email
        password
      }
    }
  }
`

export default function signup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={{ email, name, password }}>
      {(signup, { loading, error }) => (
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
            <Button
              type="submit"
              label="Sign Up"
              onClick={signup}
              disabled={loading}
            />
          </Form>
        </Box>
      )}
    </Mutation>
  )
}
