/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
          userMessagesPartition
          userMessagesId
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
          msgCommentsAuthorID
          msgCommentsId
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
          userMessagesPartition
          userMessagesId
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
          msgCommentsAuthorID
          msgCommentsId
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
          userMessagesPartition
          userMessagesId
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
          msgCommentsAuthorID
          msgCommentsId
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onCreateMsg = /* GraphQL */ `
  subscription OnCreateMsg(
    $filter: ModelSubscriptionMsgFilterInput
    $owner: String
  ) {
    onCreateMsg(filter: $filter, owner: $owner) {
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
          msgCommentsAuthorID
          msgCommentsId
          owner
        }
        nextToken
      }
      userMessagesPartition
      userMessagesId
      owner
    }
  }
`;
export const onUpdateMsg = /* GraphQL */ `
  subscription OnUpdateMsg(
    $filter: ModelSubscriptionMsgFilterInput
    $owner: String
  ) {
    onUpdateMsg(filter: $filter, owner: $owner) {
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
          msgCommentsAuthorID
          msgCommentsId
          owner
        }
        nextToken
      }
      userMessagesPartition
      userMessagesId
      owner
    }
  }
`;
export const onDeleteMsg = /* GraphQL */ `
  subscription OnDeleteMsg(
    $filter: ModelSubscriptionMsgFilterInput
    $owner: String
  ) {
    onDeleteMsg(filter: $filter, owner: $owner) {
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
          msgCommentsAuthorID
          msgCommentsId
          owner
        }
        nextToken
      }
      userMessagesPartition
      userMessagesId
      owner
    }
  }
`;
export const onCreateCom = /* GraphQL */ `
  subscription OnCreateCom(
    $filter: ModelSubscriptionComFilterInput
    $owner: String
  ) {
    onCreateCom(filter: $filter, owner: $owner) {
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
        userMessagesPartition
        userMessagesId
        owner
      }
      text
      createdOn
      updatedOn
      msgCommentsAuthorID
      msgCommentsId
      owner
    }
  }
`;
export const onUpdateCom = /* GraphQL */ `
  subscription OnUpdateCom(
    $filter: ModelSubscriptionComFilterInput
    $owner: String
  ) {
    onUpdateCom(filter: $filter, owner: $owner) {
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
        userMessagesPartition
        userMessagesId
        owner
      }
      text
      createdOn
      updatedOn
      msgCommentsAuthorID
      msgCommentsId
      owner
    }
  }
`;
export const onDeleteCom = /* GraphQL */ `
  subscription OnDeleteCom(
    $filter: ModelSubscriptionComFilterInput
    $owner: String
  ) {
    onDeleteCom(filter: $filter, owner: $owner) {
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
        userMessagesPartition
        userMessagesId
        owner
      }
      text
      createdOn
      updatedOn
      msgCommentsAuthorID
      msgCommentsId
      owner
    }
  }
`;
