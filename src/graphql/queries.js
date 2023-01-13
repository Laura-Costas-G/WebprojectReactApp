/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMain = /* GraphQL */ `
  query GetMain($type: ID!, $id: ID!) {
    getMain(type: $type, id: $id) {
      GSIPK
      GSISK
      id
      type
      author
      text
      email
      name
      createdOn
      updatedOn
    }
  }
`;
export const listMains = /* GraphQL */ `
  query ListMains(
    $type: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelMainFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMains(
      type: $type
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        GSIPK
        GSISK
        id
        type
        author
        text
        email
        name
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
