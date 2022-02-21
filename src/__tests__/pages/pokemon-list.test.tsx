import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithRoute } from "mocks/renders";

import PokemonListPage from "pages/pokemon-list";

const view = renderWithRoute(<PokemonListPage />);

test("render top bar", () => {
  view();
  expect(screen.getByText(/pokédex app/i)).toBeVisible();
});

test("render owned total", () => {
  view();
  expect(screen.getByText(/owned/i)).toBeVisible();
});

test("render loading pokemon list", () => {
  view();
  expect(screen.getByText(/loading.../i)).toBeVisible();
});

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

test("render nav menu", () => {
  view();
  expect(screen.getByText(/catch pokémon/i)).toBeVisible();
});
