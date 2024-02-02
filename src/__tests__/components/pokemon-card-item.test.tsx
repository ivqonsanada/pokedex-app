import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { myPokemons } from "mocks/data/my-pokemons";
import { pokemons } from "mocks/data/pokemons";
import { renderWithRoute } from "mocks/renders";

import PokemonCardItem from "components/pokemon-card-list/pokemon-card-item";

const view = (overrideProps = {}) =>
  renderWithRoute(<PokemonCardItem {...pokemons.results[0]} {...overrideProps} />)();

test("render animated sprite on hover", async () => {
  view();
  const image = await screen.findByRole("img", { name: /bulbasaur sprite/i });
  expect(image).toHaveAttribute("src", expect.stringMatching(/.png/i));
  userEvent.hover(image);
  expect(image).toHaveAttribute("src", expect.stringMatching(/.gif/i));
});

test("id is more than 10 and less than 100", async () => {
  view({ id: 10 });
  expect(screen.getByText(/#010/i)).toBeVisible();
});

test("id is more than 100", async () => {
  view({ id: 101 });
  expect(screen.getByText(/#101/i)).toBeVisible();
});

test("id is null", async () => {
  view({ id: null });
  expect(screen.getByText(/#\?\?\?/i)).toBeVisible();
});

// TODO: Use staticCDN again after the SSL issue resolved
test.skip("staticCDN with known src", async () => {
  view({ sprite: myPokemons[0].sprite });
  const image = screen.getByAltText(/sprite/i);
  expect(image).toHaveAttribute("src", expect.not.stringMatching(myPokemons[0].sprite));
});

// TODO: Use staticCDN again after the SSL issue resolved
test.skip("staticCDN with unknown src", async () => {
  view({ image: "http://unknown.com" });
  const image = screen.getByAltText(/sprite/i);
  expect(image).toHaveAttribute("src", expect.stringMatching("http://unknown.com"));
});
