/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import MyPokemonCardItem from "./my-pokemon-card-item";

type Props = {
  data: any;
};

const MyPokemonCardList: React.FC<Props> = ({ data }) => {
  const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    paddingTop: "64px",
    gap: "72px 16px",
  });

  const handleRelease = (e: any, nickname: string) => {
    e.preventDefault();

    let myPokemons = JSON.parse(localStorage.getItem("my-pokemon")!) || [];
    const newMyPokemons = myPokemons.filter((e: any) => e.nickname !== nickname);

    localStorage.setItem("my-pokemon", JSON.stringify(newMyPokemons));
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
