import React, { useState } from "react"
import { Box, Button, Form, FormField } from "grommet"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      user {
        id
        name
        email
      }
    }
  }
`

export default function signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Mutation mutation={SIGNIN_MUTATION} variables={{ email, password }}>
      {(signin, { loading, error }) => (
        <Box>
          <Form messages={error}>
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
            <Button
              type="submit"
              label="Sign In"
              onClick={signin}
              disabled={loading}
            />
          </Form>
        </Box>
      )}
    </Mutation>
  )
}
