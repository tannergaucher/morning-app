import React from "react"
import { Tabs, Tab } from "grommet"

import Signin from "../containers/signin"
import Signup from "../containers/signup"

export default function auth() {
  return (
    <Tabs>
      <Tab title="Sign in">
        <Signin />
      </Tab>
      <Tab title="sign up">
        <Signup />
      </Tab>
    </Tabs>
  )
}
