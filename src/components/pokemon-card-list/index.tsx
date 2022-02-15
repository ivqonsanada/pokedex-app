/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { pokemonListData } from "data/pokemon";
import PokemonCardItem from "./pokemon-card-item";

const PokemonCardList = () => {
  const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(160px, 1fr))",
    gap: "8px",
  });

  return (
    <div css={containerStyle}>
      {pokemonListData.results.map((item) => {
        return <PokemonCardItem {...item} />;
      })}
    </div>
  );
};

export default PokemonCardList;
