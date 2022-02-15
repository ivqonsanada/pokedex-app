/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Pokemon } from "types/Pokemon";
import TypeItem from "./type-item";

type Props = {
  data: Pokemon.Type[];
};

const TypeList: React.FC<Props> = ({ data }) => {
  const containerStyle = css({
    display: "flex",
    gap: "8px",
    justifyContent: "center",
  });

  return (
    <div css={containerStyle}>
      {data?.map((e) => {
        return <TypeItem key={e.type.name} data={e} />;
      })}
    </div>
  );
};

export default TypeList;
