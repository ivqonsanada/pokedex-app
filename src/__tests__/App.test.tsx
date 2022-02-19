import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  window.scrollTo = jest.fn();

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );

  expect(div).toMatchSnapshot(); /* This is our snapshot */

  ReactDOM.unmountComponentAtNode(div);
});
