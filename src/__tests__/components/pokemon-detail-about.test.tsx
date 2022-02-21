import { screen } from "@testing-library/react";

import { blastoise } from "mocks/data/pokemon";
import { renderWithRoute } from "mocks/renders";

import PokemonDetailAbout from "components/pokemon-detail/about";

const view = renderWithRoute(
  <PokemonDetailAbout data={blastoise} moves={blastoise.moves!.length} />,
  {
    route: "/4--blastoise",
    path: "/:id--:name",
  }
);
test("render weight", () => {
  view();
  expect(screen.getByText(/85.5 kg/i)).toBeVisible();
  expect(screen.getByText(/188.5 lb/i)).toBeVisible();
  expect(screen.getByText(/weight/i)).toBeVisible();
});

test("render height", () => {
  view();
  expect(screen.getByText(/1.6 m/i)).toBeVisible();
  expect(screen.getByText(/5.2 ft/i)).toBeVisible();
  expect(screen.getByText(/height/i)).toBeVisible();
});

test("render abilities", () => {
  view();
  expect(screen.getByText(/torrent/i)).toBeVisible();
});

test("render moves length", () => {
  view();
  expect(screen.getByText(/93 moves/i)).toBeVisible();
});
