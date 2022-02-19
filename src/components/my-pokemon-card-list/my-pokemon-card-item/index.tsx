/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useHover } from "hooks/useHover";
import { Link } from "react-router-dom";
import staticCDN from "convert-staticzap";

type Props = {
  id: number | null;
  name: string;
  sprite: string;
  nickname: string;
  handleRelease: (e: any, nickname: string) => void;
};

const MyPokemonCardItem: React.FC<Props> = ({
  id,
  name,
  sprite,
  nickname,
  handleRelease,
}) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgb(30 41 59)",
    padding: "0 0 24px",
    textAlign: "center",
    borderRadius: "0.25em",
  });

  const imageStyle = css({
    marginTop: "-35%",
    marginLeft: "auto",
    marginRight: "auto",
    width: isHovered ? "90%" : "100%",
    objectFit: "contain",
    zIndex: 1,
  });

  const idStyle = css({
    marginTop: "-1em",
    color: "rgb(203 213 225)",
    opacity: "0.6",
  });

  const nameStyle = css({
    fontWeight: "bold",
    fontSize: "1.5em",
    textTransform: "capitalize",
  });

  const nickNameStyle = css({
    color: "rgb(203 213 225)",
    opacity: "0.6",
    marginTop: "4px",
  });

  const buttonStyle = css({
    background: "rgb(51 65 85)",
    border: "solid 2px transparent",
    display: "flex",
    margin: "16px auto 0",
    padding: "8px 24px",
    color: "rgb(226 232 240)",
    fontWeight: "bold",
    borderRadius: "999px",
    cursor: "pointer",
    ":hover": {
      borderColor: "rgb(100 116 139)",
    },
  });

  const formatId = () => {
    if (id) {
      if (id < 10) return "#00" + id;
      if (id < 100) return "#0" + id;
      else return "#" + id;
    } else return "#???";
  };

  const path = `/pokemon/${id}--${name}?nickname=${nickname}`;
  const image = isHovered
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    : sprite;
  const idNum = formatId();

  return (
    <Link to={path}>
      <div css={containerStyle} ref={hoverRef}>
        <img
          src={staticCDN(image) || image}
          css={imageStyle}
          width={200}
          height={200}
          alt={name + " sprite"}
          crossOrigin="anonymous"
        />
        <div>
          <p css={idStyle}>{idNum}</p>
          <div>
            <p css={nameStyle}>{name}</p>
            <p css={nickNameStyle}>{nickname}</p>
          </div>
          <button css={buttonStyle} onClick={(e) => handleRelease(e, nickname)}>
            Release
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MyPokemonCardItem;
