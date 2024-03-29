import { gql } from "@apollo/client";

const GET_POKEMON_BY_NAME = gql`
  query getPokemonByName($name: String!) {
    pokemon(name: $name) {
      message
      id
      name
      weight
      height
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
    }
  }
`;

export { GET_POKEMON_BY_NAME };
