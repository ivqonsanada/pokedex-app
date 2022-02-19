import { Routes as AppRoutes, Route } from "react-router-dom";
import PokemonListPage from "pages/pokemon-list";
import PokemonDetailPage from "pages/pokemon-detail";
import MyPokemonListPage from "pages/my-pokemon-list";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<PokemonListPage />} />
      <Route path="/pokemon/:id--:name" element={<PokemonDetailPage />} />
      <Route path="/my-pokemon" element={<MyPokemonListPage />} />
    </AppRoutes>
  );
};

export default Routes;
