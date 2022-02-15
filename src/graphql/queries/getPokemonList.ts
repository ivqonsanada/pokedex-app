import { gql } from "@apollo/client";

const GET_POKEMON_LIST = gql`
  query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      status
      results {
        id
        name
        image
      }
    }
  }
`;

export { GET_POKEMON_LIST };
