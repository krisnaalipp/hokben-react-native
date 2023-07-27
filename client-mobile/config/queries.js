import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query Query {
    getItem {
      id
      name
      description
      imgUrl
    }
  }
`;

export const GET_ITEM_DETAIL = gql`
  query Query($getItemDetailId: ID!) {
    getItemDetail(id: $getItemDetailId) {
      id
      name
      description
      price
      imgUrl
      Category {
        name
      }
      Ingredients {
        name
      }
      user {
        username
      }
    }
  }
`;
