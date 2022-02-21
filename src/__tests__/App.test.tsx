import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import App from "../App";

test("renders without crashing", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot(); /* This is our snapshot */
});
