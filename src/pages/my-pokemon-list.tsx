/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import { usePokemon } from "contexts/pokemon-context";

import Container from "components/layout/container";
import MyPokemonCardList from "components/my-pokemon-card-list";

const MyPokemonListPage = () => {
  const { myPokemons } = usePokemon();

  const noPokemonStyle = css({
    color: "rgb(100 116 139)",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "> * + *": {
      marginTop: "24px",
    },
    "> div": {
      "> * + *": {
        marginTop: "8px",
      },
    },
  });

  const buttonStyle = css({
    background: "rgb(51 65 85)",
    border: "solid 2px transparent",
    display: "flex",
    padding: "12px 24px",
    color: "rgb(226 232 240)",
    fontWeight: "bold",
    borderRadius: "999px",
    cursor: "pointer",
    ":hover": {
      borderColor: "rgb(71 85 105)",
    },
  });

  return (
    <Container>
      {myPokemons.length === 0 && (
        <div css={noPokemonStyle}>
          <img
            src="https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif"
            alt="Charizard sprite"
            width={160}
            height={160}
          />
          <div>
            <p>You don't have any pokemon yet.</p>
            <p>Lets catch some!</p>
          </div>
          <Link to="/" css={buttonStyle}>
            Show me the way!
          </Link>
        </div>
      )}
      <MyPokemonCardList data={myPokemons} />
    </Container>
  );
};

export default MyPokemonListPage;
