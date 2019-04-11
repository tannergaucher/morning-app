import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Heading, Box, TextArea, TextInput, Button, Form } from "grommet"
import Auth from "../components/auth"

import Layout from "../components/layout"
import Loading from "../components/loading"
import CURRENT_USER_QUERY from "../graphql/queries/user"

export default function account() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <p>{error.message}</p>
  if (!data || !data.me) return <Auth />

  return (
    <Layout>
      <Box style={{ maxWidth: "700px" }} pad="medium">
        <Heading level={3} margin={{ vertical: "xlarge" }}>
          Hey, {data.me.name} 👋
        </Heading>
        <Box>
          <Heading level={3}>Change Username</Heading>
          <Form>
            <TextInput defaultValue={data.me.name} />
          </Form>
        </Box>
        <Heading level={3}>Edit Affirmations</Heading>
        <AffirmationsList />
        <Heading level={3}>Add a Reading Link</Heading>
        <TextInput placeholder="http://medium.com/YOUR_PROFILE" />
      </Box>
    </Layout>
  )
}

function AffirmationsList() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)
  if (loading) return <p>loading</p>
  if (error) return <p>{error.message}</p>
  if (!data) return null

  return (
    <>
      {data.me.affirmations.map(affirmation => (
        <Box key={affirmation.id} margin={{ vertical: "medium" }}>
          <TextArea defaultValue={affirmation.text} />
        </Box>
      ))}
    </>
  )
}
