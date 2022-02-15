/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";
import { POKEMON_TYPES } from "data/pokemon/type";
import { Pokemon } from "types/Pokemon";

type Props = {
  data: Pokemon.Type;
};

const TypeItem: React.FC<Props> = ({ data }) => {
  const name = data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1);
  const type = POKEMON_TYPES.find((e) => e.type.name === data.type.name) || null;

  const typeStyle = css({
    color: type?.color,
    borderColor: type?.color,
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "8px 16px",
    borderRadius: "9999px",
    display: "flex",
    "* + *": {
      marginLeft: 4,
    },
  });

  return (
    <p css={typeStyle}>
      {type?.icon && <Icon icon={type.icon} />}
      <span>{name}</span>
    </p>
  );
};

export default TypeItem;
