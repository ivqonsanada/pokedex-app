import { screen } from "@testing-library/react";

import { blastoise } from "mocks/data/pokemon";
import { renderWithRoute } from "mocks/renders";

import TypeItem from "components/pokemon-detail/type-list/type-item";

const view = (overrideProps = {}) =>
  renderWithRoute(<TypeItem data={blastoise.types![0]} {...overrideProps} />)();

test("type is in pokemon type", async () => {
  view();
  expect(await screen.findByText(blastoise.types![0].type.name)).toBeVisible();
});

test("type is not in pokemon type", async () => {
  view({
    data: { ...blastoise.types![0], type: { name: "kocheng" } },
  });
  expect(await screen.findByText("kocheng")).toBeVisible();
});
