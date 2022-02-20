import { blastoise } from "mocks/data/pokemon";
import { notFound } from "mocks/data/pokemon-not-found";
import { pokemons } from "mocks/data/pokemons";
import { graphql } from "msw";

export const handlers = [
  graphql.query("getPokemonList", (_, res, ctx) => {
    return res(
      ctx.data({
        pokemons,
      })
    );
  }),

  graphql.query("getPokemonByName", (req, res, ctx) => {
    const { name } = req.variables;
    if (name === blastoise.name) {
      return res(ctx.data({ pokemon: blastoise }));
    } else {
      return res(
        ctx.errors(notFound.errors),
        ctx.data({ pokemon: notFound.data.pokemon })
      );
    }
  }),
];
