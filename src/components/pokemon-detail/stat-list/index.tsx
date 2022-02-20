/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import StatItem from "./stat-item";

type Props = {
  data: any;
};

const StatList: React.FC<Props> = ({ data }) => {
  const sortHighestStats = (stats: any) => {
    let newStats = [...stats];

    newStats.sort((a, b) => {
      if (a.base_stat > b.base_stat) return 1;
      if (a.base_stat < b.base_stat) return -1;
      return 0;
    });

    return newStats.map((e) => {
      return e.stat.name;
    });
  };

  const twoHighestStats = sortHighestStats(data).slice(data.length - 2);

  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 4px",
    "> * + *": {
      marginTop: "16px",
    },
  });

  return (
    <div css={containerStyle}>
      {data?.map((e: any) => {
        return (
          <StatItem
            key={e.stat.name}
            data={e}
            isHighest={twoHighestStats.includes(e.stat.name)}
          />
        );
      })}
    </div>
  );
};

export default StatList;
