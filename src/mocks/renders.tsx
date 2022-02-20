import { render } from "@testing-library/react";
import { server } from "mocks/server";
import { GraphQLHandler, GraphQLRequest } from "msw";
import MyPokemonListPage from "pages/my-pokemon-list";
import PokemonDetailPage from "pages/pokemon-detail";
import PokemonListPage from "pages/pokemon-list";
import Provider from "provider";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes as AppRoutes } from "react-router-dom";

export const renderWithRoute =
  (ui: JSX.Element, { route = "/test", path = "/test" } = {}) =>
  (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
    if (responseOverride) {
      server.use(responseOverride);
    }
    window.history.pushState({}, "Test page", route);
    render(
      <Provider>
        <Toaster />
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
