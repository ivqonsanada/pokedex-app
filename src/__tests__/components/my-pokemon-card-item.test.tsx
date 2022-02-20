import { screen, within } from "@testing-library/react";
import MyPokemonCardItem from "components/my-pokemon-card-list/my-pokemon-card-item";
import userEvent from "@testing-library/user-event";
import { renderWithRoute } from "mocks/renders";
import { myPokemons } from "mocks/data/my-pokemons";

const view = (overrideProps = {}) =>
  renderWithRoute(
    <MyPokemonCardItem {...myPokemons[0]} handleRelease={jest.fn()} {...overrideProps} />
  )();

test("render animated sprite on hover", async () => {
  view();
  const image = await screen.findByAltText(/bulbasaur sprite/i);
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

test("staticCDN with known src", async () => {
  view({ sprite: myPokemons[0].sprite });
  const image = screen.getByAltText(/sprite/i);
  expect(image).toHaveAttribute("src", expect.not.stringMatching(myPokemons[0].sprite));
});

test("staticCDN with unknown src", async () => {
  view({ sprite: "http://unknown.com" });
  const image = screen.getByAltText(/sprite/i);
  expect(image).toHaveAttribute("src", expect.stringMatching("http://unknown.com"));
});

test("release pokemon", async () => {
  view();
  const link = screen.getByRole("link", {
    name: /bulbasaur sprite #001 bulbasaur si ceria release/i,
  });
  expect(link).toBeVisible();
  const releaseButton = within(link).getByRole("button", { name: /release/i });
  userEvent.click(releaseButton);
  expect(link).not.toBeVisible();
});
