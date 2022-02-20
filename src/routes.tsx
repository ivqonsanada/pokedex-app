import MyPokemonListPage from "pages/my-pokemon-list";
import PokemonDetailPage from "pages/pokemon-detail";
import PokemonListPage from "pages/pokemon-list";
import { Route, Routes as AppRoutes } from "react-router-dom";

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
