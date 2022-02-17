/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { pokeballCatch } from "animations";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Props = {
  closeModal: () => void;
};

const PokemonCatchModal: React.FC<Props> = ({ closeModal }) => {
  const params = useParams();
  const [state, setState] = useState("catching");

  const spriteRunAway = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${params.id}.gif`;

  const containerStyle = css({
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    maxWidth: "360px",
    minHeight: "400px",
    padding: "12px 24px",
    borderRadius: "0.4em",
    backgroundColor: "rgb(30 41 59)",
    transition: "1s ease",
    zIndex: 101,
    "> * + *": {
      marginTop: "24px",
    },
  });

  const fontBold = css({ fontWeight: "bold" });
  const spaceY = css({ "> * + *": { marginTop: "16px" } });

  const pokeballStyle = css({
    animation: `${pokeballCatch} 1s ease-in-out infinite`,
  });

  const pokemonStyle = css({
    objectFit: "contain",
  });

  const buttonStyle = css({
    background: "rgb(51 65 85)",
    border: "solid 2px transparent",
    marginLeft: "auto",
    display: "flex",
    padding: "12px 24px",
    color: "rgb(226 232 240)",
    fontWeight: "bold",
    borderRadius: "0.4em",
    cursor: "pointer",
    ":hover": {
      borderColor: "rgb(71 85 105)",
    },
  });

  useEffect(() => {
    setTimeout(() => {
      handleCatch();
    }, 2500);
  });

  const handleCatch = () => {
    setState("run away");
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <div css={containerStyle}>
      {state === "catching" && (
        <>
          <div css={pokeballStyle}>
            <img src="/pokeball.svg" alt="Pokeball" width={144} height={144} />
          </div>
          <p>Pokeball, please do your magic!</p>
        </>
      )}
      {state === "run away" && (
        <>
          <img
            src={spriteRunAway}
            alt={params.name + " run away"}
            css={pokemonStyle}
            width={180}
            height={180}
          />
          <div css={spaceY}>
            <p css={fontBold}>Ouch!</p>
            <p>Seems this {params.name} doesn't like you and run away.</p>
            <p>Lets find another one!</p>
            <button css={buttonStyle} onClick={handleClose}>
              Close
            </button>
          </div>
        </>
      )}
      {state === "catched" && (
        <div css={pokeballStyle}>
          <img src="/pokeball.svg" alt="Pokeball" width={180} height={180} />
        </div>
      )}
    </div>
  );
};

export default PokemonCatchModal;
