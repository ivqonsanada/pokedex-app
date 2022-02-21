/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { usePokemon } from "contexts/pokemon-context";

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  nickname: string;
  handleRelease: (e: any, nickname: string) => void;
}

const OwnedModal = () => {
  const { myPokemons } = usePokemon();
  const asdf: Pokemon[] = myPokemons;

  const groupBy = (array: Pokemon[], predicate: (v: Pokemon) => number) => {
    const group = array.reduce((acc, value) => {
      (acc[predicate(value)] ||= []).push(value);
      return acc;
    }, {} as { [key: string]: Pokemon[] });
    const groupKeys = Object.keys(group);
    return groupKeys.map((e) => group[e]);
  };

  let totalEachMyPokemons = groupBy(asdf, (e) => e.id);

  const containerStyle = css({
    margin: "20px 0 12px",
    transition: "0.3s ease",
    "> p": {
      textAlign: "center",
      color: "rgb(203 213 225)",
    },
  });

  const totalEachContainerStyle = css({
    display: "grid",
    gridTemplateColumns: "1fr 2ch",
    alignItems: "center",
    textAlign: "right",
    margin: "0 auto",
    maxWidth: "19ch",
    gap: 8,
    div: {
      display: "flex",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      "> * + *": {
        marginLeft: 4,
      },
    },
    p: {
      textTransform: "capitalize",
    },
  });

  return (
    <>
      <div css={containerStyle}>
        <div>
          {totalEachMyPokemons.map((e) => {
            return (
              <div css={totalEachContainerStyle} key={e[0].id}>
                <div>
                  <img
                    src={e[0].sprite}
                    alt={e[0].name + " mini sprite"}
                    width={48}
                    height={48}
                    crossOrigin="anonymous"
                  />
                  <p>{e[0].name}</p>
                </div>
                <p>{e.length}</p>
              </div>
            );
          })}
        </div>
        {(myPokemons.length === 0 || null) && <p>You don't own any pokemon yet.</p>}
      </div>
    </>
  );
};

export default OwnedModal;
