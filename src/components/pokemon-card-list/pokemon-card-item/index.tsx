/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
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
    width: "100%",
    objectFit: "contain",
    zIndex: 1,
  });

  const idStyle = css({
    marginTop: "-1em",
    // fontWeight: "bold",
    color: "white",
    opacity: "0.6",
  });

  const nameStyle = css({
    fontWeight: "bold",
    fontSize: "1.5em",
  });

  const ownedContainerStyle = css({
    display: "inline-block",
    backgroundColor: "rgb(51 65 85)",
    padding: "8px 16px",
    borderRadius: "0.25em",
    margin: "8px 0 -16px",
    "* + *": {
      marginLeft: "4px",
    },
    "span:first-of-type": {
      fontWeight: "bold",
      fontSize: "1.2em",
    },
  });

  const formatId = () => {
    if (id) {
      if (id < 10) return "#000" + id;
      if (id < 100) return "#00" + id;
      else return "#" + id;
    } else return "#????";
  };

  const path = `/pokemon/${id}-${name}`;
  const pokemonName = name?.[0]?.toUpperCase() + name?.slice(1) || "";
  const sprite = isHovered
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    : image;
  const idNum = formatId();

  return (
    <Link to={path}>
      <div css={containerStyle} ref={hoverRef}>
        <img
          css={imageStyle}
          width={200}
          height={200}
          src={sprite}
          alt={name + " sprite"}
        />
        <div>
          <p css={idStyle}>{idNum}</p>
          <p css={nameStyle}>{pokemonName}</p>
          <div>
            <p css={ownedContainerStyle}>
              <span>0</span> <span>Owned</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCardItem;
