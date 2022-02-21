/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import pokemonIcon from "@iconify/icons-simple-icons/pokemon";
import { Icon } from "@iconify/react";

import { usePokemon } from "contexts/pokemon-context";
import { GET_POKEMON_LIST } from "graphql/queries";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";

import Container from "components/layout/container";
import PokemonCardList from "components/pokemon-card-list";

const PokemonListPage = () => {
  const { scrollY } = useWindowScrollPositions();
  const { myPokemons } = usePokemon();

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

  const ownedContainerStyle = css({
    position: "fixed",
    top: scrollY > 0 ? 0 : 60,
    width: "100%",
    maxWidth: "414px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: scrollY === 0 ? "rgb(15 23 42)" : "rgba(71, 85, 105, 0.75)",
    backdropFilter: "blur(10px)",
    padding: "8px 16px",
    borderRadius: "0.24em 0 0 0.24em",
    margin: "8px 0 -16px",
    zIndex: 101,
    marginTop: 0,
    transition: "0.3s ease",
    overflow: "hidden",
  });

  const ownedStyle = css({
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 96,
    "span:last-of-type": {
      fontWeight: "bold",
      fontSize: "1.2em",
      color: "rgb(203 213 225)",
    },
    "span:first-of-type": {
      color: "rgb(148 163 184)",
    },
  });

  const pokemonIconStyle = css({
    position: "absolute",
    transform: "translate(-60px, -4px)",
  });

  return (
    <Container>
      {isLoading && <p css={loadingStyle}>Loading...</p>}
      {isError && <p css={loadingStyle}>Seems something bad happen to the server.</p>}
      {data && <PokemonCardList data={data.pokemons} loadMore={handleLoadMore} />}
      <Link to="/my-pokemon">
        <p css={ownedContainerStyle}>
          <Icon icon={pokemonIcon} width={96} height={96} css={pokemonIconStyle} />
          <span css={ownedStyle}>
            <span>Owned</span>
            <span>{myPokemons.length}</span>
          </span>
        </p>
      </Link>
    </Container>
  );
};

export default PokemonListPage;
