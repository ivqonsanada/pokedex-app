import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { myPokemons } from "mocks/data/my-pokemons";
import { renderWithRoute } from "mocks/renders";

import PokemonListPage from "pages/pokemon-list";

const view = renderWithRoute(<PokemonListPage />);
const setupMyPokemonData = () =>
  localStorage.setItem("my-pokemons", JSON.stringify(myPokemons));

test("render top bar", () => {
  view();
  expect(screen.getByText(/pokédex app/i)).toBeVisible();
});

test("render owned total", () => {
  view();
  expect(screen.getByRole("button", { name: /owned 0/i })).toBeVisible();
});

test("render pokemon owned modal without my pokemons on click", () => {
  view();
  const ownedButton = screen.getByRole("button", { name: /owned/i });
  expect(ownedButton).toBeVisible();
  expect(screen.queryByText(/you don't own any pokemon yet\./i)).not.toBeInTheDocument();
  userEvent.click(ownedButton);
  expect(screen.getByText(/you don't own any pokemon yet\./i)).toBeVisible();
});

test("render pokemon owned modal with my pokemons on click", () => {
  setupMyPokemonData();
  view();
  const ownedButton = screen.getByRole("button", { name: /owned/i });
  expect(ownedButton).toBeVisible();
  expect(screen.queryByText(/you don't own any pokemon yet\./i)).not.toBeInTheDocument();
  userEvent.click(ownedButton);
  expect(screen.queryByText(/you don't own any pokemon yet\./i)).not.toBeInTheDocument();
  expect(screen.getByRole("img", { name: /bulbasaur mini sprite/i })).toBeVisible();
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
