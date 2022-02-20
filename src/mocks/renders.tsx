import { render } from "@testing-library/react";
import { GraphQLHandler, GraphQLRequest } from "msw";
import Provider from "provider";
import { BrowserRouter, Routes as AppRoutes, Route } from "react-router-dom";

import { server } from "mocks/server";
import MyPokemonListPage from "pages/my-pokemon-list";
import PokemonDetailPage from "pages/pokemon-detail";
import PokemonListPage from "pages/pokemon-list";

export const renderWithRoute =
  (ui: JSX.Element, { route = "/test", path = "/test" } = {}) =>
  (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
    if (responseOverride) {
      server.use(responseOverride);
    }
    window.history.pushState({}, "Test page", route);
    render(
      <Provider>
        <AppRoutes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokemon/:id--:name" element={<PokemonDetailPage />} />
          <Route path="/my-pokemon" element={<MyPokemonListPage />} />
          <Route path={path} element={ui} />
        </AppRoutes>
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );
  };
