import gql from "graphql-tag"

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      affirmations {
        id
        text
      }
    }
  }
`

export default CURRENT_USER_QUERY
