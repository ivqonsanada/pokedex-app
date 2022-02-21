/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { css } from "@emotion/react";
import pokemonIcon from "@iconify/icons-simple-icons/pokemon";
import { Icon } from "@iconify/react";

import { usePokemon } from "contexts/pokemon-context";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";
import OwnedModal from "./owned-modal";

const PokemonOwned = () => {
  const { scrollY } = useWindowScrollPositions();
  const { myPokemons } = usePokemon();
  const [showModal, setShowModal] = useState(false);

  const containerStyle = css({
    position: "fixed",
    top: scrollY > 0 ? 0 : 60,
    width: "100%",
    maxWidth: "414px",
    zIndex: 101,
    display: "flex",
    flexDirection: "column",
    margin: "0 0 -16px",
    padding: "8px 16px",
    backgroundColor:
      scrollY === 0 && !showModal ? "rgb(15 23 42)" : "rgba(71, 85, 105, 0.75)",
    backdropFilter: "blur(10px)",
    transition: "0.3s ease",
    overflow: "hidden",
    ":hover": {
      backgroundColor: "rgba(71, 85, 105, 0.75)",
    },
  });

  const ownedContainerStyle = css({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 0,
    border: "none",
    color: "rgb(226 232 240)",
    cursor: "pointer",
  });

  const ownedStyle = css({
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 128,
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
    transform: "translate(-40px, -4px)",
  });

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div css={containerStyle}>
      <button onClick={handleClick} css={ownedContainerStyle}>
        <Icon icon={pokemonIcon} width={96} height={96} css={pokemonIconStyle} />
        <span css={ownedStyle}>
          <span>Owned</span>
          <span>{myPokemons.length}</span>
        </span>
      </button>
      {showModal && <OwnedModal />}
    </div>
  );
};

export default PokemonOwned;
