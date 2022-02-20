import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokemonCardList from "components/pokemon-card-list";
import { pokemons } from "mocks/data/pokemons";
import { renderWithRoute } from "mocks/renders";

const view = renderWithRoute(<PokemonCardList data={pokemons} loadMore={jest.fn()} />);

test("render pokemon list", async () => {
  view();
  expect(await screen.findByText(/#006/i)).toBeVisible();
  expect(await screen.findByText(/charizard/i)).toBeVisible();
  expect(await screen.findByText(/#009/i)).toBeVisible();
  expect(await screen.findByText(/blastoise/i)).toBeVisible();
});

test("render animated sprite on hover", async () => {
  view();
  const image = await screen.findByAltText(/blastoise sprite/i);
  expect(image).toHaveAttribute("src", expect.stringMatching(/.png/i));
  userEvent.hover(image);
  expect(image).toHaveAttribute("src", expect.stringMatching(/.gif/i));
});
