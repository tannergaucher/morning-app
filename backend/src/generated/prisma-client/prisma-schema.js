module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Affirmation {
  id: ID!
  text: String!
  user: User!
}

type AffirmationConnection {
  pageInfo: PageInfo!
  edges: [AffirmationEdge]!
  aggregate: AggregateAffirmation!
}

input AffirmationCreateInput {
  text: String!
  user: UserCreateOneWithoutAffirmationsInput!
}

input AffirmationCreateManyWithoutUserInput {
  create: [AffirmationCreateWithoutUserInput!]
  connect: [AffirmationWhereUniqueInput!]
}

input AffirmationCreateWithoutUserInput {
  text: String!
}

type AffirmationEdge {
  node: Affirmation!
  cursor: String!
}

enum AffirmationOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AffirmationPreviousValues {
  id: ID!
  text: String!
}

input AffirmationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [AffirmationScalarWhereInput!]
  OR: [AffirmationScalarWhereInput!]
  NOT: [AffirmationScalarWhereInput!]
}

type AffirmationSubscriptionPayload {
  mutation: MutationType!
  node: Affirmation
  updatedFields: [String!]
  previousValues: AffirmationPreviousValues
}

input AffirmationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AffirmationWhereInput
  AND: [AffirmationSubscriptionWhereInput!]
  OR: [AffirmationSubscriptionWhereInput!]
  NOT: [AffirmationSubscriptionWhereInput!]
}

input AffirmationUpdateInput {
  text: String
  user: UserUpdateOneRequiredWithoutAffirmationsInput
}

input AffirmationUpdateManyDataInput {
  text: String
}

input AffirmationUpdateManyMutationInput {
  text: String
}

input AffirmationUpdateManyWithoutUserInput {
  create: [AffirmationCreateWithoutUserInput!]
  delete: [AffirmationWhereUniqueInput!]
  connect: [AffirmationWhereUniqueInput!]
  set: [AffirmationWhereUniqueInput!]
  disconnect: [AffirmationWhereUniqueInput!]
  update: [AffirmationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [AffirmationUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [AffirmationScalarWhereInput!]
  updateMany: [AffirmationUpdateManyWithWhereNestedInput!]
}

input AffirmationUpdateManyWithWhereNestedInput {
  where: AffirmationScalarWhereInput!
  data: AffirmationUpdateManyDataInput!
}

input AffirmationUpdateWithoutUserDataInput {
  text: String
}

input AffirmationUpdateWithWhereUniqueWithoutUserInput {
  where: AffirmationWhereUniqueInput!
  data: AffirmationUpdateWithoutUserDataInput!
}

input AffirmationUpsertWithWhereUniqueWithoutUserInput {
  where: AffirmationWhereUniqueInput!
  update: AffirmationUpdateWithoutUserDataInput!
  create: AffirmationCreateWithoutUserInput!
}

input AffirmationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  user: UserWhereInput
  AND: [AffirmationWhereInput!]
  OR: [AffirmationWhereInput!]
  NOT: [AffirmationWhereInput!]
}

input AffirmationWhereUniqueInput {
  id: ID
}

type AggregateAffirmation {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createAffirmation(data: AffirmationCreateInput!): Affirmation!
  updateAffirmation(data: AffirmationUpdateInput!, where: AffirmationWhereUniqueInput!): Affirmation
  updateManyAffirmations(data: AffirmationUpdateManyMutationInput!, where: AffirmationWhereInput): BatchPayload!
  upsertAffirmation(where: AffirmationWhereUniqueInput!, create: AffirmationCreateInput!, update: AffirmationUpdateInput!): Affirmation!
  deleteAffirmation(where: AffirmationWhereUniqueInput!): Affirmation
  deleteManyAffirmations(where: AffirmationWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  affirmation(where: AffirmationWhereUniqueInput!): Affirmation
  affirmations(where: AffirmationWhereInput, orderBy: AffirmationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Affirmation]!
  affirmationsConnection(where: AffirmationWhereInput, orderBy: AffirmationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AffirmationConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  affirmation(where: AffirmationSubscriptionWhereInput): AffirmationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String
  affirmations(where: AffirmationWhereInput, orderBy: AffirmationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Affirmation!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String
  affirmations: AffirmationCreateManyWithoutUserInput
}

input UserCreateOneWithoutAffirmationsInput {
  create: UserCreateWithoutAffirmationsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAffirmationsInput {
  email: String!
  password: String!
  name: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  affirmations: AffirmationUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutAffirmationsInput {
  create: UserCreateWithoutAffirmationsInput
  update: UserUpdateWithoutAffirmationsDataInput
  upsert: UserUpsertWithoutAffirmationsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAffirmationsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutAffirmationsInput {
  update: UserUpdateWithoutAffirmationsDataInput!
  create: UserCreateWithoutAffirmationsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  affirmations_every: AffirmationWhereInput
  affirmations_some: AffirmationWhereInput
  affirmations_none: AffirmationWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    