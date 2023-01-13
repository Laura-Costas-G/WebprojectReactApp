/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMain = /* GraphQL */ `
  query GetMain($type: String!, $id: String!) {
    getMain(type: $type, id: $id) {
      GSIPK
      GSISK
      id
      type
      author
      text
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const listMains = /* GraphQL */ `
  query ListMains(
    $filter: TableMainFilterInput
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const queryMainsByMainGSI = /* GraphQL */ `
  query QueryMainsByMainGSI($GSIPK: String!, $first: Int, $after: String) {
    queryMainsByMainGSI(GSIPK: $GSIPK, first: $first, after: $after) {
      items {
        GSIPK
        GSISK
        id
        type
        author
        text
        email
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
