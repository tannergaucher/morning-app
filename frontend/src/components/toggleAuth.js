import React from "react"
import { useQuery } from "react-apollo-hooks"

import CURRENT_USER_QUERY from "../graphql/queries/user"
import Signout from "../containers/signout"
import MenuItem from "../components/styles/menuItem"
import Link from "../components/styles/Link"

export default function toggleAuth() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return data && data.me ? <Signout /> : <Signin />
}

const Signin = () => (
  <Link to={"/signin"}>
    <MenuItem>Sign In</MenuItem>
  </Link>
)
