/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const PokemonCardItem = ({ id, url, name, image }: Pokemon.BaseName) => {
  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
  });

  const textStyle = css({
    textAlign: "center",
  });

  return (
    <a href={url}>
      <div css={[containerStyle, textStyle]}>
        <p>#00{id}</p>
        <img src={image} alt={name + " sprite"} />
        <p>{name}</p>
      </div>
    </a>
  );
};

export default PokemonCardItem;
