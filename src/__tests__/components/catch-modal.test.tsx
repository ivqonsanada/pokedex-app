import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { myPokemons } from "mocks/data/my-pokemons";
import { blastoise } from "mocks/data/pokemon";
import { renderWithRoute } from "mocks/renders";

import CatchModal from "components/pokemon-detail/catch-modal";

const view = (overrideProps = {}) =>
  renderWithRoute(
    <CatchModal
      data={blastoise}
      state="Catching"
      handleState={jest.fn()}
      closeModal={jest.fn()}
      {...overrideProps}
    />,
    {
      route: `/${blastoise.id}--${blastoise.name}`,
      path: "/:id--:name",
    }
  )();
const setupMyPokemonData = () =>
  localStorage.setItem("my-pokemons", JSON.stringify(myPokemons));

test("render with catching state", async () => {
  view();
  expect(screen.getByText(/poké ball, please do your magic!/i)).toBeVisible();
});

test("render with run away state", async () => {
  view({ state: "Run Away" });
  expect(screen.getByRole("img", { name: /blastoise run away sprite/i })).toBeVisible();
});

test("render with catched state", async () => {
  view({ state: "Catched" });
  expect(screen.getByRole("textbox")).toBeVisible();
});

test("save pokemon", async () => {
  view({ state: "Catched" });
  const nicknameInputElement = screen.getByRole("textbox");
  const saveButton = screen.getByRole("button", { name: /save/i });
  expect(nicknameInputElement).toBeVisible();
  userEvent.type(nicknameInputElement, "si ceria");
  expect(saveButton).toBeVisible();
  userEvent.click(saveButton);
});

test("save pokemon with already existing nickname", async () => {
  setupMyPokemonData();
  view({ state: "Catched" });
  const nicknameInputElement = screen.getByRole("textbox");
  const saveButton = screen.getByRole("button", { name: /save/i });
  expect(nicknameInputElement).toBeVisible();
  userEvent.type(nicknameInputElement, myPokemons[0].nickname);
  expect(saveButton).toBeVisible();
  userEvent.click(saveButton);
  expect(screen.getByText(/nickname has been used\./i)).toBeVisible();
});
