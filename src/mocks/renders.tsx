import { render } from "@testing-library/react";
import { GraphQLHandler, GraphQLRequest } from "msw";
import Provider from "provider";
import { BrowserRouter, Routes as AppRoutes, Route } from "react-router-dom";

import { server } from "mocks/server";

export const renderWithRoute =
  (ui: JSX.Element, { route = "/", path = "/" } = {}) =>
  (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
    if (responseOverride) {
      server.use(responseOverride);
    }
    window.history.pushState({}, "Test page", route);
    render(
      <Provider>
        <AppRoutes>
          <Route path={path} element={ui} />
        </AppRoutes>
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );
  };
