/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { usePokemon } from "contexts/pokemon-context";
import MyPokemonCardItem from "./my-pokemon-card-item";

type Props = {
  data: any;
};

const MyPokemonCardList: React.FC<Props> = ({ data }) => {
  const { releasePokemon } = usePokemon();

  const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    paddingTop: "64px",
    gap: "72px 16px",
  });

  const handleRelease = (e: any, nickname: string) => {
    e.preventDefault();

    releasePokemon(nickname);
  };

  return (
    <div css={containerStyle}>
      {data?.map((item: any) => {
        return (
          <MyPokemonCardItem
            key={item.nickname}
            {...item}
            handleRelease={handleRelease}
          />
        );
      })}
    </div>
  );
};

export default MyPokemonCardList;
