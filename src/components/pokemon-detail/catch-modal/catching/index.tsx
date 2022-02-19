/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { pokeballCatch } from "animations";

const CatchingState = () => {
  const pokeballStyle = css({ animation: `${pokeballCatch} 1s ease-in-out infinite` });

  return (
    <>
      <div css={pokeballStyle}>
        <img src="/pokeball.svg" alt="Pokeball" width={144} height={144} />
      </div>
      <p>Poké Ball, please do your magic!</p>
    </>
  );
};

export default CatchingState;
