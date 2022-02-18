import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    toast(
      (t) => (
        <span>
          Yay! <b>{nickname}</b> now become your partner!
        </span>
      ),
      {
        duration: 4000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgb(30 41 59)",
          color: "rgb(203 213 225)",
        },
      }
    );
  };

  const releasePokemon = (nickname: string) => {
    const filteredMyPokemons = myPokemons.filter((e: any) => e.nickname !== nickname);
    setMyPokemons(filteredMyPokemons);
    localStorage.setItem(storageKey, JSON.stringify(filteredMyPokemons));
    toast(
      (t) => (
        <span>
          Nooo! <b>{nickname}</b> sad because you release it to the wild once more. :(
        </span>
      ),
      {
        duration: 8000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgb(30 41 59)",
          color: "rgb(203 213 225)",
        },
      }
    );
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
