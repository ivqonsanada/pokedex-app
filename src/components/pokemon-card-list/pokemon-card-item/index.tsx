/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const PokemonCardItem = ({ id, name, image }: Pokemon.BaseName) => {
  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(30 41 59)",
    padding: "0 0 24px",
    textAlign: "center",
    borderRadius: "0.25em",
  });

  const imageStyle = css({
    marginTop: "-35%",
  });

  const idStyle = css({
    marginTop: "-1em",
    fontWeight: "bold",
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
    padding: "12px 8px",
    borderRadius: "0.25em",
    margin: "8px 0 -16px",
    "* + *": {
      marginLeft: "4px",
    },
  });

  const path = "/pokemon/" + name;

  return (
    <Link to={path}>
      <div css={containerStyle}>
        <img css={imageStyle} src={image} alt={name + " sprite"} />
        <p css={idStyle}>#00{id}</p>
        <p css={nameStyle}>{name[0].toUpperCase() + name.slice(1)}</p>
        <div>
          <p css={ownedContainerStyle}>
            <span>Owned</span> <span>0</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCardItem;
