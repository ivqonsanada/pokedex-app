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
    name: params.id,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: gqlVariables,
  });

  console.log(data);

  const pokemon = {
    name: data?.pokemon?.name?.[0].toUpperCase() + data?.pokemon?.name?.slice(1) || "",
    sprite: data?.pokemon?.sprites?.front_default || "",
    types: data?.pokemon?.types,
  };

  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  });

  const spriteStyle = css({
    width: "100%",
    height: "auto",
  });

  const nameStyle = css({
    fontWeight: "bold",
    fontSize: "2.4em",
    textAlign: "center",
  });

  // const gradientContainerStyle = css({
  //   width: "100%",
  // });

  // const gradientSpriteStyle = css({
  //   width: "100%",
  //   filter: "blur(40px)",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   // transform: "translate(-25%, -25%)",
  //   zIndex: 0,
  // });

  return (
    <Container>
      <div css={containerStyle}>
        <div>
          <img css={spriteStyle} src={pokemon.sprite} alt={""} />
        </div>
        <p css={nameStyle}>{pokemon.name}</p>
        <TypeList data={pokemon.types} />
      </div>
    </Container>
  );
};

export default PokemonDetail;
