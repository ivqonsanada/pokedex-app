/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Pokemon } from "types/Pokemon";
import PokemonCardItem from "./pokemon-card-item";

type Props = {
  data?: Pokemon.PokemonList;
};

const PokemonCardList: React.FC<Props> = ({ data }) => {
  const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(160px, 1fr))",
    paddingTop: "64px",
    gap: "64px 16px",
  });

  const results = data?.results || [];

  return (
    <div css={containerStyle}>
      {results.map((item: Pokemon.PokemonItem) => {
        return <PokemonCardItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default PokemonCardList;
