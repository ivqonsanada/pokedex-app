/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import staticCDN from "convert-staticzap";
import { useHover } from "hooks/useHover";
import { Link } from "react-router-dom";
import { Pokemon } from "types/Pokemon";

const PokemonCardItem = ({ id, name, image }: Pokemon.BaseName) => {
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

  const formatId = () => {
    if (id) {
      if (id < 10) return "#00" + id;
      if (id < 100) return "#0" + id;
      else return "#" + id;
    } else return "#????";
  };

  const path = `/pokemon/${id}--${name}`;
  const sprite = isHovered
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    : image;
  const idNum = formatId();

  return (
    <Link to={path}>
      <div css={containerStyle} ref={hoverRef}>
        <img
          src={staticCDN(sprite) || sprite}
          css={imageStyle}
          width={200}
          height={200}
          alt={name + " sprite"}
          crossOrigin="anonymous"
        />
        <div>
          <p css={idStyle}>{idNum}</p>
          <p css={nameStyle}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCardItem;
