/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMain = /* GraphQL */ `
  mutation CreateMain(
    $input: CreateMainInput!
    $condition: ModelMainConditionInput
  ) {
    createMain(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const updateMain = /* GraphQL */ `
  mutation UpdateMain(
    $input: UpdateMainInput!
    $condition: ModelMainConditionInput
  ) {
    updateMain(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const deleteMain = /* GraphQL */ `
  mutation DeleteMain(
    $input: DeleteMainInput!
    $condition: ModelMainConditionInput
  ) {
    deleteMain(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
