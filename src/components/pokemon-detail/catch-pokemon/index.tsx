/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";
import { bounce } from "animations";
import { UseWindowSize } from "hooks/useWindowSize";

type Props = {
  data: any;
  handleClick: () => void;
  isCatchMode: boolean;
};

const CatchPokemon: React.FC<Props> = ({ data, handleClick, isCatchMode }) => {
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

  const catchPokemon = keyframes`
    from {
       
        transform: translate3d(0,0,0), rotate(0);
    }

    30% {
        transform: translate3d(-20%,-${height / 3}px,0) rotate(720deg) scale(0.8);
    }

    to {
        transform: translate3d(0,-${height / 2}px,0) rotate(1440deg) scale(0.6);
    }
  `;

  const catchBallStyle = css({
    position: "fixed",
    bottom: "5%",
    animationDelay: "5s",
    animation: `${catchPokemon} 0.8s linear forwards`,
    "> img": {
      userSelect: "none",
    },
    cursor: "grab",
  });

  const hidden = css({ display: "none" });
  const invisible = css({ visibility: "hidden" });

  return (
    <>
      <button css={[buttonStyle, isCatchMode && invisible]} onClick={handleClick}>
        <img
          src="/pokeball.svg"
          alt="Pokeball"
          width={48}
          height={48}
          css={pokeballStyle}
        />
        <span>Catch</span>
      </button>

      <div css={[catchBallStyle, !isCatchMode && hidden]}>
        <img src="/pokeball.svg" alt="Pokeball" width={180} height={180} />
      </div>
    </>
  );
};

export default CatchPokemon;
