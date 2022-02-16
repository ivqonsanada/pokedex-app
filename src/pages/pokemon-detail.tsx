/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import Container from "components/layout/container";
import MoveList from "components/pokemon-detail/move-list";
import StatList from "components/pokemon-detail/stat-list";
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
    name: data?.pokemon?.name || "",
    sprite: data?.pokemon?.sprites?.front_default || "",
    spriteAnimated: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${params.id}.gif`,
    types: data?.pokemon?.types || [],
    moves: data?.pokemon?.moves || [],
    stats: data?.pokemon?.stats || [],
  };

  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    marginTop: "24px",
  });

  const spriteStyle = css({
    width: "70%",
    height: "auto",
  });

  const nameStyle = css({
    fontWeight: "bold",
    fontSize: "2.4em",
    textAlign: "center",
    textTransform: "capitalize",
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
          width={224}
          height={224}
        />
        <p css={nameStyle}>{pokemon.name}</p>
        <TypeList data={pokemon.types} />
        <StatList data={pokemon.stats} />
        <MoveList data={pokemon.moves} />
      </div>
    </Container>
  );
};

export default PokemonDetail;
