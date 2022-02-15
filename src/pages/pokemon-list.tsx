import { useQuery } from "@apollo/client";
import Container from "components/layout/container";
import PokemonCardList from "components/pokemon-card-list";
import { GET_POKEMON_LIST } from "graphql/queries";

const PokemonList = () => {
  const gqlVariables = {
    limit: 12,
    offset: 0,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
    variables: gqlVariables,
  });

  // console.log(data);

  return (
    <Container>
      <PokemonCardList data={data?.pokemons} />
    </Container>
  );
};

export default PokemonList;
