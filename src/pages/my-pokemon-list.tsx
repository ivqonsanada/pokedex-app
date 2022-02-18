import Container from "components/layout/container";
import MyPokemonCardList from "components/my-pokemon-card-list";
import { usePokemon } from "contexts/pokemon-context";

const MyPokemonList = () => {
  const { myPokemons } = usePokemon();

  return (
    <Container>
      <MyPokemonCardList data={myPokemons} />
    </Container>
  );
};

export default MyPokemonList;
