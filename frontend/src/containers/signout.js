import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Button } from "grommet"

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`

const Signout = () => {
  return (
    <Mutation mutation={SIGN_OUT_MUTATION}>
      {signout => {
        return <Button onClick={signout} label="Sign Out" plain={true} />
      }}
    </Mutation>
  )
}

export default Signout
