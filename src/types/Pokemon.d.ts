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

  type Pokemon = {
    abilities?: Ability[];
    base_experience?: number;
    forms?: BaseName[];
    game_indices?: GameIndex[];
    height?: number;
    held_items?: HeldItem[];
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: Move[];
    name?: string;
    order?: number;
    species?: BaseName;
    sprites?: Sprite;
    stats?: Stat[];
    types?: Type[];
    weight?: number;
    status?: boolean;
    message?: string;
  };

  type Type = {
    slot?: number;
    type: BaseName;
    color?: string;
    icon?: IconifyIcon;
  };
}
