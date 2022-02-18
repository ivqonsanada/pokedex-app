import { createContext, useContext, useEffect, useState } from "react";

interface PokemonContextInterface {
  myPokemons: [];
  savePokemon: (pokemon: any, nickname: string) => void;
  releasePokemon: (nickname: string) => void;
}

const PokemonContext = createContext<PokemonContextInterface>({
  myPokemons: [],
  savePokemon: () => {},
  releasePokemon: () => {},
});

const PokemonProvider: React.FC = (props) => {
  const [myPokemons, setMyPokemons] = useState<any>([]);
  const storageKey = "my-pokemons";

  const savePokemon = (pokemon: any, nickname: string) => {
    const newPokemon = { ...pokemon, nickname };
    const newMyPokemons = [...myPokemons, newPokemon];
    setMyPokemons(newMyPokemons);
    localStorage.setItem(storageKey, JSON.stringify(newMyPokemons));
  };

  const releasePokemon = (nickname: string) => {
    const filteredMyPokemons = myPokemons.filter((e: any) => e.nickname !== nickname);
    setMyPokemons(filteredMyPokemons);
    localStorage.setItem(storageKey, JSON.stringify(filteredMyPokemons));
  };

  useEffect(() => {
    const myPokemonsStorage = JSON.parse(localStorage.getItem(storageKey)!) || [];
    setMyPokemons(myPokemonsStorage);
  }, []);

  return (
    <PokemonContext.Provider
      value={{ myPokemons, savePokemon, releasePokemon }}
      {...props}
    />
  );
};

const usePokemon = () => {
  return useContext(PokemonContext);
};

export { PokemonContext, PokemonProvider, usePokemon };
