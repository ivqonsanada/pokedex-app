import grassIcon from "@iconify/icons-mdi/grass";
import poisonOutline from "@iconify/icons-healthicons/poison-outline";
import fireOutlined from "@iconify/icons-ant-design/fire-outlined";
import waterIcon from "@iconify/icons-akar-icons/water";
import electricityOutline from "@iconify/icons-healthicons/electricity-outline";
import snowflakeCold from "@iconify/icons-wi/snowflake-cold";
import catFaceWithWrySmile from "@iconify/icons-emojione-monotone/cat-face-with-wry-smile";
import boxingOne from "@iconify/icons-icon-park-outline/boxing-one";
import earthIcon from "@iconify/icons-carbon/earth";
import birdIcon from "@iconify/icons-ph/bird";
import dnaIcon from "@iconify/icons-file-icons/dna";
import bugLine from "@iconify/icons-clarity/bug-line";
import mountainIcon from "@iconify/icons-carbon/mountain";
import unknownStatusLine from "@iconify/icons-clarity/unknown-status-line";
import butterflyIcon from "@iconify/icons-ph/butterfly";
import heavyMetal from "@iconify/icons-icon-park-outline/heavy-metal";
import dragonIcon from "@iconify/icons-la/dragon";
import ghostIcon from "@iconify/icons-bx/ghost";
import moonIcon from "@iconify/icons-bytesize/moon";

export const normal = {
  color: "#A8A878",
  icon: catFaceWithWrySmile,
  type: {
    name: "normal",
  },
};

export const fire = {
  color: "#F08030",
  icon: fireOutlined,
  type: {
    name: "fire",
  },
};

export const water = {
  color: "#6890F0",
  icon: waterIcon,
  type: {
    name: "water",
  },
};

export const grass = {
  color: "#78C850",
  icon: grassIcon,
  type: {
    name: "grass",
  },
};

export const electric = {
  color: "#F8D030",
  icon: electricityOutline,
  type: {
    name: "electric",
  },
};

export const ice = {
  color: "#98D8D8",
  icon: snowflakeCold,
  type: {
    name: "ice",
  },
};

export const fighting = {
  color: "#C03028",
  icon: boxingOne,
  type: {
    name: "fighting",
  },
};

export const poison = {
  color: "#A040A0",
  icon: poisonOutline,
  type: {
    name: "poison",
  },
};

export const ground = {
  color: "#E0C068",
  icon: earthIcon,
  type: {
    name: "ground",
  },
};

export const flying = {
  color: "#A890F0",
  icon: birdIcon,
  type: {
    name: "flying",
  },
};

export const psychic = {
  color: "#F85888",
  icon: dnaIcon,
  type: {
    name: "psychic",
  },
};

export const bug = {
  color: "#A8B820",
  icon: bugLine,
  type: {
    name: "bug",
  },
};

export const rock = {
  color: "#B8A038",
  icon: mountainIcon,
  type: {
    name: "rock",
  },
};

export const ghost = {
  color: "#705898",
  icon: ghostIcon,
  type: {
    name: "ghost",
  },
};

export const dark = {
  color: "#705848",
  icon: moonIcon,
  type: {
    name: "dark",
  },
};

export const dragon = {
  color: "#7038F8",
  icon: dragonIcon,
  type: {
    name: "dragon",
  },
};

export const steel = {
  color: "#B8B8D0",
  icon: heavyMetal,
  type: {
    name: "steel",
  },
};

export const fairy = {
  color: "#905F63",
  icon: butterflyIcon,
  type: {
    name: "fairy",
  },
};

export const unknown = {
  color: "#6AA596",
  icon: unknownStatusLine,
  type: {
    name: "unknown",
  },
};

const POKEMON_TYPES = [
  normal,
  fire,
  water,
  grass,
  electric,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dark,
  dragon,
  steel,
  fairy,
  unknown,
];

export { POKEMON_TYPES };
