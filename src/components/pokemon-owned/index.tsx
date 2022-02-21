/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import pokemonIcon from "@iconify/icons-simple-icons/pokemon";
import { Icon } from "@iconify/react";

import { usePokemon } from "contexts/pokemon-context";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";

const PokemonOwned = () => {
  const { scrollY } = useWindowScrollPositions();
  const { myPokemons } = usePokemon();

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
    ":hover": {
      backgroundColor: "rgba(71, 85, 105, 0.75)",
    },
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
    <Link to="/my-pokemon">
      <p css={ownedContainerStyle}>
        <Icon icon={pokemonIcon} width={96} height={96} css={pokemonIconStyle} />
        <span css={ownedStyle}>
          <span>Owned</span>
          <span>{myPokemons.length}</span>
        </span>
      </p>
    </Link>
  );
};

export default PokemonOwned;
