/** @jsxImportSource @emotion/react */

import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";

import { GET_POKEMON_LIST } from "graphql/queries";

import Container from "components/layout/container";
import PokemonCardList from "components/pokemon-card-list";
import PokemonOwned from "components/pokemon-owned";

const PokemonListPage = () => {
  const gqlVariables = { limit: 12, offset: 0 };
  const {
    loading: isLoading,
    error: isError,
    data,
    fetchMore,
  } = useQuery(GET_POKEMON_LIST, {
    variables: gqlVariables,
  });

  const handleLoadMore = () => {
    fetchMore({ variables: { offset: data?.pokemons.results.length } });
  };

  const loadingStyle = css({
    color: "rgb(100 116 139)",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <Container>
      <Helmet>
        <title>Pokédex - A Gamify Pokemon Catalog App</title>
      </Helmet>
      <PokemonOwned />
      {isLoading && <p css={loadingStyle}>Loading...</p>}
      {isError && <p css={loadingStyle}>Seems something bad happen to the server.</p>}
      {data && <PokemonCardList data={data.pokemons} loadMore={handleLoadMore} />}
    </Container>
  );
};

export default PokemonListPage;
