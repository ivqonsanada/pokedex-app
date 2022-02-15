/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const PokemonCardItem = ({ id, name, image }: Pokemon.BaseName) => {
  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(30 41 59)",
  });

  const textStyle = css({
    textAlign: "center",
  });

  const path = "/pokemon/" + name;

  return (
    <Link to={path}>
      <div css={[containerStyle, textStyle]}>
        <p>#00{id}</p>
        <img src={image} alt={name + " sprite"} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default PokemonCardItem;
