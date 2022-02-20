import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { myPokemons } from "mocks/data/my-pokemons";
import { renderWithRoute } from "mocks/renders";
import MyPokemonListPage from "pages/my-pokemon-list";

const view = renderWithRoute(<MyPokemonListPage />);
const setupMyPokemonData = () =>
  localStorage.setItem("my-pokemons", JSON.stringify(myPokemons));

test("render top bar", () => {
  view();
  expect(screen.getByText(/pokédex app/i)).toBeVisible();
});

test("render with no pokemon", () => {
  view();
  expect(screen.getByText(/you don't have any pokemon yet\./i)).toBeVisible();
  expect(screen.getByRole("link", { name: /show me the way!/i })).toBeVisible();
});

test("render with pokemon", () => {
  setupMyPokemonData();
  view();

  const link = screen.getByRole("link", {
    name: /bulbasaur sprite #001 bulbasaur si ceria release/i,
  });
  within(link).getByRole("button", { name: /release/i });

  expect(screen.getByText(/teik/i)).toBeVisible();
  expect(screen.getByText(/miii/i)).toBeVisible();
  expect(screen.getByText(/iiin/i)).toBeVisible();
  expect(screen.getByText(/senpai/i)).toBeVisible();
  expect(screen.getByText(/mewtwo/i)).toBeVisible();
});

test("release pokemon", async () => {
  setupMyPokemonData();
  view();
  const link = screen.getByRole("link", {
    name: /bulbasaur sprite #001 bulbasaur si ceria release/i,
  });
  expect(link).toBeVisible();
  const releaseButton = within(link).getByRole("button", { name: /release/i });
  userEvent.click(releaseButton);
  expect(link).not.toBeVisible();
});

test("render nav menu", () => {
  view();
  expect(screen.getByText(/my pokémon/i)).toBeVisible();
});
