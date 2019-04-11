import React from "react"
import { Tabs, Tab, Heading } from "grommet"
import Layout from "../components/layout"

import Signin from "../containers/signin"
import Signup from "../containers/signup"

export default function auth() {
  return (
    <Layout>
      <Tabs margin={{ vertical: "medium" }}>
        <Tab title="Sign In" margin={{ vertical: "medium" }}>
          <Signin />
        </Tab>
        <Tab title="Sign Up" margin={{ vertical: "medium" }}>
          <Signup />
        </Tab>
      </Tabs>
    </Layout>
  )
}
