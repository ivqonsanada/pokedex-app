/** @jsxImportSource @emotion/react */

import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { useParams } from "react-router";
import { css } from "@emotion/react";
import staticCDN from "convert-staticzap";

import { usePokemon } from "contexts/pokemon-context";

type Props = {
  handleClose: () => void;
  data: any;
};

const CatchedState: React.FC<Props> = ({ data, handleClose }) => {
  const params = useParams();
  const { myPokemons, savePokemon } = usePokemon();
  const [error, setError] = useState("");
  const nicknameInputElement = useRef() as MutableRefObject<HTMLInputElement>;

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
    "input[type=text]::placeholder": {
      color: "rgb(100 116 139)",
    },
  });

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

  const pokemonStyle = css({ objectFit: "contain" });
  const errorStyle = css({ color: "rgb(248 113 113)" });
  const fontBold = css({ fontWeight: "bold" });
  const spaceY = css({ "> * + *": { marginTop: "16px" } });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let pokemon = {
      id: params.id,
      name: params.name,
      sprite: data.sprite,
      spriteAnimated: data.spriteAnimated,
    };

    const nickname = nicknameInputElement.current.value;
    const isNicknameUsed = myPokemons.find((e: any) => e.nickname === nickname);

    if (isNicknameUsed) {
      setError("Nickname has been used. Try another one.");
      return;
    }

    savePokemon(pokemon, nickname);

    handleClose();
  };

  return (
    <>
      <img
        src={staticCDN(data.spriteAnimated) || data.spriteAnimated}
        css={pokemonStyle}
        width={180}
        height={180}
        alt={params.name + " sprite"}
        crossOrigin="anonymous"
      />
      <div css={spaceY}>
        <p css={fontBold}>Gotcha!</p>
        <p>Seems this {params.name} take a liking to you and want to be your partner.</p>
        <p>
          Lets give it a <span css={fontBold}>nickname</span>!
        </p>
      </div>
      <form onSubmit={handleSubmit} css={formStyle}>
        <div>
          <input type="text" ref={nicknameInputElement} placeholder="nickname" required />
          <button type="submit" css={buttonStyle}>
            Save
          </button>
        </div>
        {error && <p css={errorStyle}>{error}</p>}
      </form>
    </>
  );
};

export default CatchedState;
