import { screen } from "@testing-library/react";
import { renderWithRoute } from "mocks/renders";
import PokemonDetailPage from "pages/pokemon-detail";
import { blastoise } from "mocks/data/pokemon";
import userEvent from "@testing-library/user-event";

const view = renderWithRoute(<PokemonDetailPage />, {
  route: `/pokemon/${blastoise.id}--${blastoise.name}`,
  path: "/pokemon/:id--:name",
});

test("render loading", () => {
  view();
  expect(screen.getByText(/loading.../i)).toBeVisible();
});

test("render sprite", () => {
  view();
  expect(screen.getByAltText(/sprite/i)).toBeVisible();
});

test("render pokemon id", () => {
  view();
  expect(screen.getByText(/#009/i)).toBeVisible();
});

test("render name", () => {
  view();
  expect(screen.getByText(/blastoise/i)).toBeVisible();
});

test("render catch button", async () => {
  view();
  const catchButton = await screen.findByRole("button", { name: /pokeball catch/i });
  expect(catchButton).toBeVisible();
  userEvent.click(catchButton);
  expect(catchButton).toBeDisabled();
});

test("render pokemon detail about", async () => {
  view();
  expect(await screen.findByText(/about/i)).toBeVisible();
  expect(
    screen.getByText(/has 2 abilities:\. it also has 93 moves to use in a battle\./i)
  ).toBeVisible();
});
