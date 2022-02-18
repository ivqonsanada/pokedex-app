/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { pokeballCatch } from "animations";
import staticCDN from "convert-staticzap";
import { FormEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

type Props = {
  data: any;
  closeModal: () => void;
};

const CatchModal: React.FC<Props> = ({ data, closeModal }) => {
  const params = useParams();
  const [state, setState] = useState("Catching");
  const [error, setError] = useState("");
  const nicknameInputElement = useRef() as MutableRefObject<HTMLInputElement>;

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
    "input[type=text]": {
      padding: "8px 16px",
      backgroundColor: "rgb(51 65 85)",
      border: "solid 2px rgb(71 85 105)",
      borderRadius: "0.4em",
      color: "rgb(226 232 240)",
      fontWeight: "bold",
      fontSize: "1em",
      width: "100%",
    },
    "input[type=text]:focus": {
      border: "solid 2px rgb(148 163 184)",
      outline: "none",
    },
  });

  const fontBold = css({ fontWeight: "bold" });
  const spaceY = css({ "> * + *": { marginTop: "16px" } });

  const pokeballStyle = css({ animation: `${pokeballCatch} 1s ease-in-out infinite` });
  const pokemonStyle = css({ objectFit: "contain" });

  const buttonStyle = css({
    background: "rgb(51 65 85)",
    border: "solid 2px transparent",
    display: "flex",
    marginLeft: "auto",
    padding: "12px 24px",
    color: "rgb(226 232 240)",
    fontWeight: "bold",
    borderRadius: "999px",
    cursor: "pointer",
    ":hover": {
      borderColor: "rgb(71 85 105)",
    },
  });

  const formStyle = css({
    marginBottom: "24px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    button: {
      marginLeft: "8px",
      fontSize: "1em",
    },
    div: {
      display: "flex",
      justifyContent: "space-around",
    },
    "> * + *": {
      marginTop: "12px",
    },
  });

  const errorStyle = css({ color: "rgb(248 113 113)" });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleCatch();
    }, 2500);

    return () => {
      clearTimeout(timeoutId);

      const htmlElement = document.getElementsByTagName("html")[0];
      htmlElement.style.overflowY = "scroll";
    };
  }, []);

  const handleCatch = () => {
    const isCatched = Math.random() > 0.5;
    if (isCatched) setState("Catched");
    else setState("Run Away");
  };

  const handleClose = () => {
    closeModal();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let pokemon = {
      id: params.id,
      name: params.name,
      sprite: data.sprite,
      spriteAnimated: data.spriteAnimated,
      nickname: nicknameInputElement.current.value,
    };

    let myPokemons = JSON.parse(localStorage.getItem("my-pokemon")!) || [];
    const isNicknameUsed = myPokemons.find((e: any) => e.nickname === pokemon.nickname);

    if (isNicknameUsed) {
      setError("Nickname has been used. Try another one.");
      return;
    }

    if (myPokemons.length > 0) {
      myPokemons.push(pokemon);
      localStorage.setItem("my-pokemon", JSON.stringify(myPokemons));
    } else {
      localStorage.setItem("my-pokemon", JSON.stringify([pokemon]));
    }

    handleClose();
  };

  return (
    <div css={containerStyle}>
      {state === "Catching" && (
        <>
          <div css={pokeballStyle}>
            <img src="/pokeball.svg" alt="Pokeball" width={144} height={144} />
          </div>
          <p>Poké Ball, please do your magic!</p>
        </>
      )}
      {state === "Run Away" && (
        <>
          <img
            src={staticCDN(spriteRunAway) || spriteRunAway}
            alt={params.name + " run away sprite"}
            css={pokemonStyle}
            width={180}
            height={180}
          />
          <div css={spaceY}>
            <p css={fontBold}>Ouch!</p>
            <p>Seems this {params.name} doesn't take a liking to you and run away.</p>
            <p>Lets catch another one!</p>
            <button css={buttonStyle} onClick={handleClose}>
              Close
            </button>
          </div>
        </>
      )}
      {state === "Catched" && (
        <>
          <img
            src={staticCDN(data.spriteAnimated) || data.spriteAnimated}
            alt={params.name + " run away sprite"}
            css={pokemonStyle}
            width={180}
            height={180}
          />
          <div css={spaceY}>
            <p css={fontBold}>Gotcha!</p>
            <p>
              Seems this {params.name} take a liking to you and want to be your partner.
            </p>
            <p>
              Lets give it a <span css={fontBold}>nickname</span>!
            </p>
          </div>
          <form onSubmit={handleSubmit} css={formStyle}>
            <div>
              <input type="text" ref={nicknameInputElement} autoFocus required />
              <button type="submit" css={buttonStyle}>
                Save
              </button>
            </div>
            {error && <p css={errorStyle}>{error}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default CatchModal;
