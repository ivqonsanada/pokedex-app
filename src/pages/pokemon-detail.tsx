/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import Container from "components/layout/container";
import TypeList from "components/pokemon-detail/type-list";
import { GET_POKEMON_BY_NAME } from "graphql/queries";
import { useParams } from "react-router";

const PokemonDetail = () => {
  const params = useParams();

  const gqlVariables = {
    name: params.name,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: gqlVariables,
  });

  console.log(data);

  const pokemon = {
    name: data?.pokemon?.name?.[0].toUpperCase() + data?.pokemon?.name?.slice(1) || "",
    sprite: data?.pokemon?.sprites?.front_default || "",
    spriteAnimated: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${params.id}.gif`,
    types: data?.pokemon?.types,
  };

  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
  });

  const spriteStyle = css({
    width: "70%",
    height: "auto",
  });

  const nameStyle = css({
    fontWeight: "bold",
    fontSize: "2.4em",
    textAlign: "center",
  });

  const handleImageError = (e: any) => {
    e.target.src = pokemon.sprite;
    e.target.style.width = "100%";
  };

  return (
    <Container>
      <div css={containerStyle}>
        <img
          css={spriteStyle}
          src={pokemon.spriteAnimated}
          alt={`${pokemon.name} sprite`}
          onError={handleImageError}
        />
        <p css={nameStyle}>{pokemon.name}</p>
        <TypeList data={pokemon.types} />
      </div>
    </Container>
  );
};

export default PokemonDetail;
