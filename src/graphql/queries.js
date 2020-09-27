/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGiphme = /* GraphQL */ `
  query GetGiphme($id: ID!) {
    getGiphme(id: $id) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
export const listGiphmes = /* GraphQL */ `
  query ListGiphmes(
    $filter: ModelGiphmeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGiphmes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        altText
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
