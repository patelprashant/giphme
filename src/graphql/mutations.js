/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGiphme = /* GraphQL */ `
  mutation CreateGiphme(
    $input: CreateGiphmeInput!
    $condition: ModelGiphmeConditionInput
  ) {
    createGiphme(input: $input, condition: $condition) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateGiphme = /* GraphQL */ `
  mutation UpdateGiphme(
    $input: UpdateGiphmeInput!
    $condition: ModelGiphmeConditionInput
  ) {
    updateGiphme(input: $input, condition: $condition) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteGiphme = /* GraphQL */ `
  mutation DeleteGiphme(
    $input: DeleteGiphmeInput!
    $condition: ModelGiphmeConditionInput
  ) {
    deleteGiphme(input: $input, condition: $condition) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
