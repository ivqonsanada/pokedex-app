import { screen, waitFor } from "@testing-library/react";
import { renderWithRoute } from "mocks/renders";
import PokemonDetailPage from "pages/pokemon-detail";
import { blastoise } from "mocks/data/pokemon";

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

  await waitFor(() => expect(screen.getByRole("button", { name: /catch/i })));
});
