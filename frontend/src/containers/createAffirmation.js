import React, { useState } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Button, Form, FormField } from "grommet"

const CREATE_AFFIRMATION_MUTATION = gql`
  mutation createAffirmation($text: String!) {
    createAffirmation(text: $text) {
      id
    }
  }
`

export default function createAffirmation() {
  const [text, setText] = useState("")
  return (
    <Mutation mutation={CREATE_AFFIRMATION_MUTATION} variables={{ text }}>
      {(createMutation, { loading, error }) => (
        <Form onSubmit={() => createMutation()}>
          <FormField
            name="affirmation"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <Button type="submit" disabled={loading} label="Add New" />
        </Form>
      )}
    </Mutation>
  )
}
