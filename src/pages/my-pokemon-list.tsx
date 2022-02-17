import Container from "components/layout/container";
import MyPokemonCardList from "components/my-pokemon-card-list";

const MyPokemonList = () => {
  const myPokemons = JSON.parse(localStorage.getItem("my-pokemon")!) || [];

  return (
    <Container>
      <MyPokemonCardList data={myPokemons} />
    </Container>
  );
};

export default MyPokemonList;
