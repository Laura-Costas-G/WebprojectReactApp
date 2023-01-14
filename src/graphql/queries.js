/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($Partition: ID!, $id: ID!) {
    getUser(Partition: $Partition, id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $Partition: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      Partition: $Partition
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const usersByEmailAndId = /* GraphQL */ `
  query UsersByEmailAndId(
    $email: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmailAndId(
      email: $email
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMsg = /* GraphQL */ `
  query GetMsg($authorID: ID!, $id: ID!) {
    getMsg(authorID: $authorID, id: $id) {
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
export const listMsgs = /* GraphQL */ `
  query ListMsgs(
    $authorID: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelMsgFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMsgs(
      authorID: $authorID
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCom = /* GraphQL */ `
  query GetCom($messageID: ID!, $id: ID!) {
    getCom(messageID: $messageID, id: $id) {
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
export const listComs = /* GraphQL */ `
  query ListComs(
    $messageID: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelComFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComs(
      messageID: $messageID
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        msgAutorID
        messageID
        message {
          id
          authorPartition
          authorID
          text
          createdOn
          updatedOn
          owner
        }
        text
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const comsByAuthorIDAndId = /* GraphQL */ `
  query ComsByAuthorIDAndId(
    $authorID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comsByAuthorIDAndId(
      authorID: $authorID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        msgAutorID
        messageID
        message {
          id
          authorPartition
          authorID
          text
          createdOn
          updatedOn
          owner
        }
        text
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
