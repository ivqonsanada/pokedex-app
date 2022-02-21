/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";

import { POKEMON_TYPES } from "data/pokemon-type";
import { Pokemon } from "types/Pokemon";

type Props = {
  data: Pokemon.Type;
};

const TypeItem: React.FC<Props> = ({ data }) => {
  const type = POKEMON_TYPES.find((e) => e.type.name === data.type.name) || null;

  const typeStyle = css({
    color: type?.color,
    borderColor: type?.color,
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "8px 16px",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    "> * + *": {
      marginLeft: 4,
    },
  });

  return (
    <p css={typeStyle}>
      {type?.icon && <Icon icon={type.icon} />}
      <span>{data.type.name}</span>
    </p>
  );
};

export default TypeItem;
