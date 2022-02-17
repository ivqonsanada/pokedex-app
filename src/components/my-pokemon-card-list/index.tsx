/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import MyPokemonCardItem from "./my-pokemon-card-item";

type Props = {
  data: any;
};

const MyPokemonCardList: React.FC<Props> = ({ data }) => {
  const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(160px, 1fr))",
    paddingTop: "64px",
    gap: "72px 16px",
  });

  const results = data || [];

  return (
    <div css={containerStyle}>
      {results.map((item: any) => {
        return <MyPokemonCardItem key={item.nickname} {...item} />;
      })}
    </div>
  );
};

export default MyPokemonCardList;
