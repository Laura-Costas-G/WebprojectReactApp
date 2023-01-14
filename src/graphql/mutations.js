/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      Partition
      email
      name
      createdOn
      updatedOn
      messages {
        items {
          id
          authorPartition
          authorID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          authorPartition
          authorID
          msgAutorID
          messageID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      Partition
      email
      name
      createdOn
      updatedOn
      messages {
        items {
          id
          authorPartition
          authorID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          authorPartition
          authorID
          msgAutorID
          messageID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      Partition
      email
      name
      createdOn
      updatedOn
      messages {
        items {
          id
          authorPartition
          authorID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          authorPartition
          authorID
          msgAutorID
          messageID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const createMsg = /* GraphQL */ `
  mutation CreateMsg(
    $input: CreateMsgInput!
    $condition: ModelMsgConditionInput
  ) {
    createMsg(input: $input, condition: $condition) {
      id
      authorPartition
      authorID
      author {
        id
        Partition
        email
        name
        createdOn
        updatedOn
        messages {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      text
      createdOn
      updatedOn
      comments {
        items {
          id
          authorPartition
          authorID
          msgAutorID
          messageID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateMsg = /* GraphQL */ `
  mutation UpdateMsg(
    $input: UpdateMsgInput!
    $condition: ModelMsgConditionInput
  ) {
    updateMsg(input: $input, condition: $condition) {
      id
      authorPartition
      authorID
      author {
        id
        Partition
        email
        name
        createdOn
        updatedOn
        messages {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      text
      createdOn
      updatedOn
      comments {
        items {
          id
          authorPartition
          authorID
          msgAutorID
          messageID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteMsg = /* GraphQL */ `
  mutation DeleteMsg(
    $input: DeleteMsgInput!
    $condition: ModelMsgConditionInput
  ) {
    deleteMsg(input: $input, condition: $condition) {
      id
      authorPartition
      authorID
      author {
        id
        Partition
        email
        name
        createdOn
        updatedOn
        messages {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      text
      createdOn
      updatedOn
      comments {
        items {
          id
          authorPartition
          authorID
          msgAutorID
          messageID
          text
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const createCom = /* GraphQL */ `
  mutation CreateCom(
    $input: CreateComInput!
    $condition: ModelComConditionInput
  ) {
    createCom(input: $input, condition: $condition) {
      id
      authorPartition
      authorID
      author {
        id
        Partition
        email
        name
        createdOn
        updatedOn
        messages {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      msgAutorID
      messageID
      message {
        id
        authorPartition
        authorID
        author {
          id
          Partition
          email
          name
          createdOn
          updatedOn
          owner
        }
        text
        createdOn
        updatedOn
        comments {
          nextToken
        }
        owner
      }
      text
      createdOn
      updatedOn
      owner
    }
  }
`;
export const updateCom = /* GraphQL */ `
  mutation UpdateCom(
    $input: UpdateComInput!
    $condition: ModelComConditionInput
  ) {
    updateCom(input: $input, condition: $condition) {
      id
      authorPartition
      authorID
      author {
        id
        Partition
        email
        name
        createdOn
        updatedOn
        messages {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      msgAutorID
      messageID
      message {
        id
        authorPartition
        authorID
        author {
          id
          Partition
          email
          name
          createdOn
          updatedOn
          owner
        }
        text
        createdOn
        updatedOn
        comments {
          nextToken
        }
        owner
      }
      text
      createdOn
      updatedOn
      owner
    }
  }
`;
export const deleteCom = /* GraphQL */ `
  mutation DeleteCom(
    $input: DeleteComInput!
    $condition: ModelComConditionInput
  ) {
    deleteCom(input: $input, condition: $condition) {
      id
      authorPartition
      authorID
      author {
        id
        Partition
        email
        name
        createdOn
        updatedOn
        messages {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      msgAutorID
      messageID
      message {
        id
        authorPartition
        authorID
        author {
          id
          Partition
          email
          name
          createdOn
          updatedOn
          owner
        }
        text
        createdOn
        updatedOn
        comments {
          nextToken
        }
        owner
      }
      text
      createdOn
      updatedOn
      owner
    }
  }
`;
