import React from "react"
import { Mutation } from "react-apollo"
import { useApolloClient } from "react-apollo-hooks"
import gql from "graphql-tag"
import { Button } from "grommet"

import MenuItem from "../components/styles/menuItem"
import CURRENT_USER_QUERY from "../graphql/queries/user"

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`

const Signout = () => {
  const client = useApolloClient()
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {signout => {
        return (
          <Button
            onClick={() => {
              signout()
              client.resetStore()
            }}
            label={<MenuItem>Sign Out</MenuItem>}
            plain={true}
          />
        )
      }}
    </Mutation>
  )
}

export default Signout
