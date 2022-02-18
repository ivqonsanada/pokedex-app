import { gql } from "@apollo/client";

const GET_EVOLUTION_CHAIN_BY_ID = gql`
  query evolutionChain($id: String!) {
    evolutionChain(id: $id) {
      params
      status
      message
      response
    }
  }
`;

export { GET_EVOLUTION_CHAIN_BY_ID };
