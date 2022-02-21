/** @jsxImportSource @emotion/react */

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { css } from "@emotion/react";

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

const toastStyle = {
  borderRadius: "0.3em",
  background: "rgb(30 41 59)",
  color: "rgb(203 213 225)",
  backgroundColor: "rgba(71, 85, 105, 0.75)",
  backdropFilter: "blur(10px)",
};

const PokemonProvider: React.FC = (props) => {
  const [myPokemons, setMyPokemons] = useState<any>([]);
  const storageKey = "my-pokemons";
  const buttonStyle = css({
    background: "rgb(100, 116, 139, 0.75)",
    border: "solid 2px transparent",
    display: "flex",
    margin: "24px auto 0",
    padding: "8px 24px",
    color: "rgb(226 232 240)",
    fontWeight: "bold",
    borderRadius: "999px",
    cursor: "pointer",
    ":hover": {
      borderColor: "rgb(148 163 184)",
    },
  });

  const savePokemon = (pokemon: any, nickname: string) => {
    const newPokemon = { ...pokemon, nickname };
    const newMyPokemons = [...myPokemons, newPokemon];
    setMyPokemons(newMyPokemons);
    localStorage.setItem(storageKey, JSON.stringify(newMyPokemons));
    toast(
      () => (
        <span>
          Yay! <b>{nickname}</b> now become your partner!
        </span>
      ),
      {
        duration: 4000,
        position: "top-center",
        style: toastStyle,
      }
    );
  };

  const releasePokemon = (nickname: string) => {
    const myPokemonsBefore = [...myPokemons];
    const filteredMyPokemons = myPokemons.filter((e: any) => e.nickname !== nickname);

    setMyPokemons(filteredMyPokemons);
    localStorage.setItem(storageKey, JSON.stringify(filteredMyPokemons));

    const cancelRelease = (t: any) => {
      setMyPokemons(myPokemonsBefore);
      localStorage.setItem(storageKey, JSON.stringify(myPokemonsBefore));
      toast.dismiss(t.id);

      toast(
        () => (
          <span>
            <b>{nickname}</b> glad you cancel on releasing it.
          </span>
        ),
        {
          duration: 3000,
          position: "top-center",
          style: toastStyle,
        }
      );
    };

    toast(
      (t) => (
        <span>
          Nooo! <b>{nickname}</b> sad because you release it to the wild once more. :(
          <button css={buttonStyle} onClick={() => cancelRelease(t)}>
            Cancel Release
          </button>
        </span>
      ),
      {
        duration: 6000,
        position: "top-center",
        style: toastStyle,
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
