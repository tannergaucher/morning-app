// Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  affirmation: (where?: AffirmationWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  affirmation: (where: AffirmationWhereUniqueInput) => AffirmationPromise;
  affirmations: (
    args?: {
      where?: AffirmationWhereInput;
      orderBy?: AffirmationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Affirmation>;
  affirmationsConnection: (
    args?: {
      where?: AffirmationWhereInput;
      orderBy?: AffirmationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AffirmationConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAffirmation: (data: AffirmationCreateInput) => AffirmationPromise;
  updateAffirmation: (
    args: { data: AffirmationUpdateInput; where: AffirmationWhereUniqueInput }
  ) => AffirmationPromise;
  updateManyAffirmations: (
    args: {
      data: AffirmationUpdateManyMutationInput;
      where?: AffirmationWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertAffirmation: (
    args: {
      where: AffirmationWhereUniqueInput;
      create: AffirmationCreateInput;
      update: AffirmationUpdateInput;
    }
  ) => AffirmationPromise;
  deleteAffirmation: (where: AffirmationWhereUniqueInput) => AffirmationPromise;
  deleteManyAffirmations: (
    where?: AffirmationWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  affirmation: (
    where?: AffirmationSubscriptionWhereInput
  ) => AffirmationSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AffirmationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AffirmationWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface AffirmationWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  user?: UserWhereInput;
  AND?: AffirmationWhereInput[] | AffirmationWhereInput;
  OR?: AffirmationWhereInput[] | AffirmationWhereInput;
  NOT?: AffirmationWhereInput[] | AffirmationWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  affirmations_every?: AffirmationWhereInput;
  affirmations_some?: AffirmationWhereInput;
  affirmations_none?: AffirmationWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface AffirmationCreateInput {
  text: String;
  user: UserCreateOneWithoutAffirmationsInput;
}

export interface UserCreateOneWithoutAffirmationsInput {
  create?: UserCreateWithoutAffirmationsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutAffirmationsInput {
  email: String;
  password: String;
  name?: String;
}

export interface AffirmationUpdateInput {
  text?: String;
  user?: UserUpdateOneRequiredWithoutAffirmationsInput;
}

export interface UserUpdateOneRequiredWithoutAffirmationsInput {
  create?: UserCreateWithoutAffirmationsInput;
  update?: UserUpdateWithoutAffirmationsDataInput;
  upsert?: UserUpsertWithoutAffirmationsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutAffirmationsDataInput {
  email?: String;
  password?: String;
  name?: String;
}

export interface UserUpsertWithoutAffirmationsInput {
  update: UserUpdateWithoutAffirmationsDataInput;
  create: UserCreateWithoutAffirmationsInput;
}

export interface AffirmationUpdateManyMutationInput {
  text?: String;
}

export interface UserCreateInput {
  email: String;
  password: String;
  name?: String;
  affirmations?: AffirmationCreateManyWithoutUserInput;
}

export interface AffirmationCreateManyWithoutUserInput {
  create?:
    | AffirmationCreateWithoutUserInput[]
    | AffirmationCreateWithoutUserInput;
  connect?: AffirmationWhereUniqueInput[] | AffirmationWhereUniqueInput;
}

export interface AffirmationCreateWithoutUserInput {
  text: String;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  name?: String;
  affirmations?: AffirmationUpdateManyWithoutUserInput;
}

export interface AffirmationUpdateManyWithoutUserInput {
  create?:
    | AffirmationCreateWithoutUserInput[]
    | AffirmationCreateWithoutUserInput;
  delete?: AffirmationWhereUniqueInput[] | AffirmationWhereUniqueInput;
  connect?: AffirmationWhereUniqueInput[] | AffirmationWhereUniqueInput;
  set?: AffirmationWhereUniqueInput[] | AffirmationWhereUniqueInput;
  disconnect?: AffirmationWhereUniqueInput[] | AffirmationWhereUniqueInput;
  update?:
    | AffirmationUpdateWithWhereUniqueWithoutUserInput[]
    | AffirmationUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | AffirmationUpsertWithWhereUniqueWithoutUserInput[]
    | AffirmationUpsertWithWhereUniqueWithoutUserInput;
  deleteMany?: AffirmationScalarWhereInput[] | AffirmationScalarWhereInput;
  updateMany?:
    | AffirmationUpdateManyWithWhereNestedInput[]
    | AffirmationUpdateManyWithWhereNestedInput;
}

export interface AffirmationUpdateWithWhereUniqueWithoutUserInput {
  where: AffirmationWhereUniqueInput;
  data: AffirmationUpdateWithoutUserDataInput;
}

export interface AffirmationUpdateWithoutUserDataInput {
  text?: String;
}

export interface AffirmationUpsertWithWhereUniqueWithoutUserInput {
  where: AffirmationWhereUniqueInput;
  update: AffirmationUpdateWithoutUserDataInput;
  create: AffirmationCreateWithoutUserInput;
}

export interface AffirmationScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  AND?: AffirmationScalarWhereInput[] | AffirmationScalarWhereInput;
  OR?: AffirmationScalarWhereInput[] | AffirmationScalarWhereInput;
  NOT?: AffirmationScalarWhereInput[] | AffirmationScalarWhereInput;
}

export interface AffirmationUpdateManyWithWhereNestedInput {
  where: AffirmationScalarWhereInput;
  data: AffirmationUpdateManyDataInput;
}

export interface AffirmationUpdateManyDataInput {
  text?: String;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  password?: String;
  name?: String;
}

export interface AffirmationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AffirmationWhereInput;
  AND?: AffirmationSubscriptionWhereInput[] | AffirmationSubscriptionWhereInput;
  OR?: AffirmationSubscriptionWhereInput[] | AffirmationSubscriptionWhereInput;
  NOT?: AffirmationSubscriptionWhereInput[] | AffirmationSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Affirmation {
  id: ID_Output;
  text: String;
}

export interface AffirmationPromise extends Promise<Affirmation>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  user: <T = UserPromise>() => T;
}

export interface AffirmationSubscription
  extends Promise<AsyncIterator<Affirmation>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  user: <T = UserSubscription>() => T;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
  name?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  affirmations: <T = FragmentableArray<Affirmation>>(
    args?: {
      where?: AffirmationWhereInput;
      orderBy?: AffirmationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  affirmations: <T = Promise<AsyncIterator<AffirmationSubscription>>>(
    args?: {
      where?: AffirmationWhereInput;
      orderBy?: AffirmationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AffirmationConnection {
  pageInfo: PageInfo;
  edges: AffirmationEdge[];
}

export interface AffirmationConnectionPromise
  extends Promise<AffirmationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AffirmationEdge>>() => T;
  aggregate: <T = AggregateAffirmationPromise>() => T;
}

export interface AffirmationConnectionSubscription
  extends Promise<AsyncIterator<AffirmationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AffirmationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAffirmationSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AffirmationEdge {
  node: Affirmation;
  cursor: String;
}

export interface AffirmationEdgePromise
  extends Promise<AffirmationEdge>,
    Fragmentable {
  node: <T = AffirmationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AffirmationEdgeSubscription
  extends Promise<AsyncIterator<AffirmationEdge>>,
    Fragmentable {
  node: <T = AffirmationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAffirmation {
  count: Int;
}

export interface AggregateAffirmationPromise
  extends Promise<AggregateAffirmation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAffirmationSubscription
  extends Promise<AsyncIterator<AggregateAffirmation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AffirmationSubscriptionPayload {
  mutation: MutationType;
  node: Affirmation;
  updatedFields: String[];
  previousValues: AffirmationPreviousValues;
}

export interface AffirmationSubscriptionPayloadPromise
  extends Promise<AffirmationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AffirmationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AffirmationPreviousValuesPromise>() => T;
}

export interface AffirmationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AffirmationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AffirmationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AffirmationPreviousValuesSubscription>() => T;
}

export interface AffirmationPreviousValues {
  id: ID_Output;
  text: String;
}

export interface AffirmationPreviousValuesPromise
  extends Promise<AffirmationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
}

export interface AffirmationPreviousValuesSubscription
  extends Promise<AsyncIterator<AffirmationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  name?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Affirmation",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
