/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import staticCDN from "convert-staticzap";
import { useParams } from "react-router";

type Props = {
  handleClose: () => void;
};

const RunAwayState: React.FC<Props> = ({ handleClose }) => {
  const params = useParams();

  const spriteRunAway = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${params.id}.gif`;

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

  const fontBold = css({ fontWeight: "bold" });
  const spaceY = css({ "> * + *": { marginTop: "16px" } });

  return (
    <>
      <img
        src={staticCDN(spriteRunAway) || spriteRunAway}
        css={pokemonStyle}
        width={180}
        height={180}
        alt={params.name + " run away sprite"}
        crossOrigin="anonymous"
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
  );
};

export default RunAwayState;
