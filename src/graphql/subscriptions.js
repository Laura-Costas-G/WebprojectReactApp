/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMain = /* GraphQL */ `
  subscription OnCreateMain(
    $GSIPK: String
    $GSISK: String
    $id: String
    $type: String
  ) {
    onCreateMain(GSIPK: $GSIPK, GSISK: $GSISK, id: $id, type: $type) {
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
export const onUpdateMain = /* GraphQL */ `
  subscription OnUpdateMain(
    $GSIPK: String
    $GSISK: String
    $id: String
    $type: String
  ) {
    onUpdateMain(GSIPK: $GSIPK, GSISK: $GSISK, id: $id, type: $type) {
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
export const onDeleteMain = /* GraphQL */ `
  subscription OnDeleteMain(
    $GSIPK: String
    $GSISK: String
    $id: String
    $type: String
  ) {
    onDeleteMain(GSIPK: $GSIPK, GSISK: $GSISK, id: $id, type: $type) {
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
