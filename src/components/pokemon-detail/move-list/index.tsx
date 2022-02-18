/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import MoveItem from "./move-item";

type Props = {
  data: any;
};

const MoveList: React.FC<Props> = ({ data }) => {
  const containerStyle = css({
    display: "flex",
    gap: "8px",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  });

  return (
    <div css={containerStyle}>
      {data?.map((e: any, index: number) => {
        return <MoveItem key={index} data={e} />;
      })}
    </div>
  );
};

export default MoveList;
