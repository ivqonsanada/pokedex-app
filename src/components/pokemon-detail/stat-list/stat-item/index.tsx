/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type Props = {
  data: any;
  isHighest: boolean;
};

const StatItem: React.FC<Props> = ({ data, isHighest }) => {
  const rangePercentage = (data.base_stat / 255) * 100 + "%";
  const name = data.stat.name.replace(/special-/, "sp. ");

  const containerStyle = css({
    display: "flex",
    "> p:first-of-type": {
      width: "16ch",
      textTransform: "capitalize",
      color: "rgb(148 163 184)",
    },
    "> p:last-of-type": {
      width: "6ch",
      textAlign: "right",
      fontWeight: "bold",
    },
    "> * + *": {
      marginLeft: "4ch",
    },
  });

  const rangeContainerStyle = css({
    marginTop: "auto",
    marginBottom: "auto",
    background: "rgb(51 65 85)",
    height: "0.6em",
    width: "75%",
    borderRadius: "1em",
  });

  const rangeStyle = css({
    backgroundColor: isHighest ? "#2db587" : "rgb(203 213 225)",
    height: "100%",
    width: rangePercentage,
    borderRadius: "999px",
  });

  return (
    <div css={containerStyle}>
      <p>{name}</p>
      <p>{data.base_stat}</p>
      <div css={rangeContainerStyle}>
        <div css={rangeStyle}></div>
      </div>
    </div>
  );
};

export default StatItem;
