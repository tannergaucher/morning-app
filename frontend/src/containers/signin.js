import React, { useState } from "react"
import { Box, Button, Form, FormField } from "grommet"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import CURRENT_USER_QUERY from "../graphql/queries/user"
import { navigate } from "@reach/router"

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
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={{ email, password }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signin, { loading, error }) => (
        <Box align="center">
          <Form
            onSubmit={async e => {
              e.preventDefault()
              await signin()
              navigate(`/`)
            }}
          >
            <FormField
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FormField
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              label="Sign In"
              disabled={loading}
              margin={{ vertical: "medium" }}
              fill={true}
            />
          </Form>
        </Box>
      )}
    </Mutation>
  )
}
