import { IconifyIcon } from "@iconify/react";

declare namespace Pokemon {
  type BaseList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: BaseName[];
    status: boolean;
    message: string;
  };

  type BaseName = {
    id?: number;
    url?: string;
    name: string;
    image?: string;
  };

  type PokemonList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    nextOffset?: number | null;
    prevOffset?: number | null;
    results: PokemonItem[];
    status: boolean;
    message: string;
  };

  type PokemonItem = {
    id: number;
    url: string;
    name: string;
    image: string;
    artwork: string;
    dreamworld: string;
  };

  type Type = {
    slot?: number;
    type: BaseName;
    color: string;
    icon?: IconifyIcon;
  };
}
