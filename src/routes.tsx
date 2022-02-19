import { Routes as AppRoutes, Route } from "react-router-dom";
import PokemonList from "pages/pokemon-list";
import PokemonDetail from "pages/pokemon-detail";
import MyPokemonList from "pages/my-pokemon-list";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id--:name" element={<PokemonDetail />} />
      <Route path="/my-pokemon" element={<MyPokemonList />} />
    </AppRoutes>
  );
};

export default Routes;
