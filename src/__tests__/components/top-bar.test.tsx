import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TopBar from "components/top-bar";
import Provider from "provider";
import { BrowserRouter } from "react-router-dom";

const view = (overrideProps = {}) =>
  render(
    <Provider>
      <TopBar isDeepPath {...overrideProps} />
    </Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

test("render with back button", () => {
  view();
  expect(screen.getByRole("heading", { name: /pokédex app/i })).toBeVisible();
  const backButton = screen.getByRole("button", {
    name: /back button/i,
  });
  expect(backButton).toBeVisible();
  userEvent.click(backButton);
});

test("render without back button", () => {
  view({ isDeepPath: false });
  expect(screen.getByRole("heading", { name: /pokédex app/i })).toBeVisible();
  expect(screen.queryByRole("button", { name: /back button/i })).not.toBeInTheDocument();
});

test("render after scroll", () => {
  view({ isDeepPath: false });
  window.scrollY = 1;
  expect(screen.getByRole("heading", { name: /pokédex app/i })).toBeVisible();
});
