/** @jsxImportSource @emotion/react */

import InfiniteScroll from "react-infinite-scroll-component";
import { css } from "@emotion/react";

import { Pokemon } from "types/Pokemon";
import PokemonCardItem from "./pokemon-card-item";

type Props = {
  data?: Pokemon.PokemonList;
  loadMore: () => void;
};

const PokemonCardList: React.FC<Props> = ({ data, loadMore }) => {
  const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    paddingTop: "96px",
    gap: "72px 16px",
  });

  const results = data?.results || [];

  const loadingStyle = css({
    color: "rgb(100 116 139)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <InfiniteScroll
      css={containerStyle}
      dataLength={results.length} //This is important field to render the next data
      next={loadMore}
      hasMore={true}
      loader={<p css={loadingStyle}>Loading...</p>}
    >
      {results.map((item: Pokemon.PokemonItem) => {
        return <PokemonCardItem key={item.id} {...item} />;
      })}
    </InfiniteScroll>
  );
};

export default PokemonCardList;
