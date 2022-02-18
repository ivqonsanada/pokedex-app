/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type Props = {
  data: any;
};

const MoveItem: React.FC<Props> = ({ data }) => {
  const typeStyle = css({
    borderColor: "rgb(100 116 139)",
    borderWidth: "1px",
    borderStyle: "solid",
    color: "rgb(148 163 184)",
    padding: "8px 16px",
    borderRadius: "9999px",
    display: "flex",
  });

  return (
    <p css={typeStyle}>
      <span>{data.move.name}</span>
    </p>
  );
};

export default MoveItem;
