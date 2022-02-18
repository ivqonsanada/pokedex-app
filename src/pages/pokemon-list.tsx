/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
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

  const loadingStyle = css({
    color: "rgb(100 116 139)",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <Container>
      {loading && <p css={loadingStyle}>Loading...</p>}
      {error && <p css={loadingStyle}>Seems something bad happen to the server.</p>}
      {data && <PokemonCardList data={data.pokemons} />}
    </Container>
  );
};

export default PokemonList;
