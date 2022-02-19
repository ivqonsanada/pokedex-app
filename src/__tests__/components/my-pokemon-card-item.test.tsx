import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import MyPokemonCardItem from "components/my-pokemon-card-list/my-pokemon-card-item";
import staticCDN from "convert-staticzap";

const props = (id: number | null) => {
  return {
    id: id,
    name: "charizard",
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    spriteAnimated: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
    nickname: "asdfe",
    handleRelease: jest.fn(),
  };
};

it("renders without crashing", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MyPokemonCardItem {...props(1)} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("hovers sprite to show animated sprite", async () => {
  render(
    <BrowserRouter>
      <MyPokemonCardItem {...props(10)} />
    </BrowserRouter>
  );

  const image = screen.getByAltText(props(10).name + " sprite");

  expect(image).toHaveAttribute("src", staticCDN(props(10).sprite));

  fireEvent.mouseOver(image);

  expect(image).toHaveAttribute("src", staticCDN(props(10).spriteAnimated));
});

test("id more than 100", async () => {
  render(
    <BrowserRouter>
      <MyPokemonCardItem {...props(1000)} />
    </BrowserRouter>
  );

  const id = screen.getByText("#1000");
  expect(id).toBeVisible();
});

test("null id", async () => {
  render(
    <BrowserRouter>
      <MyPokemonCardItem {...props(null)} />
    </BrowserRouter>
  );

  const id = screen.getByText("#???");
  expect(id).toBeVisible();
});

test("release pokemon", async () => {
  render(
    <BrowserRouter>
      <MyPokemonCardItem {...props(1)} />
    </BrowserRouter>
  );

  const button = screen.getByText("Release");
  expect(button).toBeVisible();

  fireEvent.click(button);
});

test("staticCDN can't produce new link", async () => {
  const props = {
    id: 33,
    name: "charizard",
    sprite: `https://test/${33}.png`,
    spriteAnimated: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${33}.gif`,
    nickname: "asdfe",
    handleRelease: jest.fn(),
  };

  render(
    <BrowserRouter>
      <MyPokemonCardItem {...props} />
    </BrowserRouter>
  );

  const button = screen.getByText("Release");
  expect(button).toBeVisible();

  fireEvent.click(button);
});
