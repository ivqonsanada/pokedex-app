/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { bounce, throwPokeBall } from "animations";
import { UseWindowSize } from "hooks/useWindowSize";

type Props = {
  data: any;
  handleClick: () => void;
  isCatching: boolean;
};

const CatchPokemon: React.FC<Props> = ({ data, handleClick, isCatching }) => {
  const size = UseWindowSize();
  const height = size.height ? size.height - 5 : 0;

  const buttonStyle = css({
    padding: "12px 18px",
    backgroundColor: "rgb(51 65 85)",
    color: "rgb(226 232 240)",
    display: "flex",
    flexDirection: "row",
    border: "solid 2px rgba(0, 0, 0, 0)",
    borderRadius: "999px",
    fontWeight: "bold",
    cursor: "pointer",
    "> span": {
      fontSize: "1.4em",
      zIndex: "10",
    },
    ":hover": {
      border: "solid 2px rgb(100 116 139)",
    },
  });

  const pokeballStyle = css({
    marginTop: "-20%",
    marginRight: "12px",
    animation: `${bounce} 2.4s ease infinite`,
    zIndex: 100,
  });

  const catchBallStyle = css({
    position: "fixed",
    bottom: "5%",
    animation: `1s ease-out 0.3s 1 forwards ${throwPokeBall(height)}`,
  });

  const hidden = css({ display: "none" });
  const invisible = css({ visibility: "hidden" });

  return (
    <>
      <button css={[buttonStyle]} onClick={handleClick}>
        <img
          src="/pokeball.svg"
          alt="Pokeball"
          width={48}
          height={48}
          css={pokeballStyle}
        />
        <span>Catch</span>
      </button>

      <div css={[catchBallStyle, !isCatching && hidden]}>
        <img src="/pokeball.svg" alt="Pokeball" width={180} height={180} />
      </div>
    </>
  );
};

export default CatchPokemon;
