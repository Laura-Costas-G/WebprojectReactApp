/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMain = /* GraphQL */ `
  query GetMain($id: ID!) {
    getMain(id: $id) {
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
    $filter: ModelMainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMains(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
