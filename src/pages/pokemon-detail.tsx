/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useQueryParams } from "hooks/useQueryParams";
import { useTopBar } from "contexts/topbar-context";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_NAME } from "graphql/queries";
import staticCDN from "convert-staticzap";
import Container from "components/layout/container";
import PokemonDetail from "components/pokemon-detail";

const PokemonDetailPage = () => {
  const params = useParams();
  const { scrollY } = useWindowScrollPositions();
  const location = useLocation();
  const { nickname } = useQueryParams(location.search);
  const { changeTitle } = useTopBar();

  const nameRef = useRef<HTMLDivElement | null>(null);
  const nameEntry = useIntersectionObserver(nameRef, {});
  const isNameVisible = !!nameEntry?.isIntersecting;

  const [isCatching, setIsCatching] = useState(false);

  const gqlVariables = { name: params.name };
  const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: gqlVariables,
  });

  const pokemon = {
    name: params.name || "",
    sprite: data?.pokemon?.sprites?.front_default || "",
    spriteAnimated: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${params.id}.gif`,
    types: data?.pokemon?.types || [],
    moves: data?.pokemon?.moves || [],
    stats: data?.pokemon?.stats || [],
    about: {
      height: data?.pokemon?.height,
      weight: data?.pokemon?.weight,
      abilities: data?.pokemon?.abilities || [],
    },
  };

  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "center",
    marginTop: "24px",
    padding: "0 24px",
  });

  const spriteStyle = css({
    width: "70%",
    height: "auto",
    transition: `0.4s ease ${isCatching ? "1s" : "0s"}`,
  });

  const nameStyle = css({
    fontWeight: "bold",
    fontSize: "2.4em",
    textAlign: "center",
    textTransform: "capitalize",
  });

  const nicknameStyle = css({
    fontSize: "1em",
    textAlign: "center",
    marginTop: "8px",
    color: "rgb(150 165 186)",
  });

  const transition = css({ transition: `0.4s ease` });
  const fadeOutEffect = css({ opacity: 0 });
  const spacingY = css({ "> * + *": { marginTop: "24px" } });

  const handleImageError = (e: any) => {
    e.target.src = staticCDN(pokemon.sprite) || pokemon.sprite;
    e.target.style.width = "100%";
  };

  useEffect(() => {
    const formatId = (id: number | string) => {
      if (id) {
        if (id < 10) return "#00" + id;
        if (id < 100) return "#0" + id;
        else return "#" + id;
      } else return "#????";
    };

    if (params.id && (scrollY === 0 || isNameVisible) && !isCatching)
      changeTitle(formatId(params.id));
    else if (params.name && (!isNameVisible || isCatching)) changeTitle(params.name);

    return () => {
      const htmlElement = document.getElementsByTagName("html")[0];
      htmlElement.style.overflowY = "scroll";
      changeTitle("default");
    };
  }, [params, scrollY, changeTitle, isNameVisible, isCatching]);

  return (
    <Container>
      <div css={containerStyle}>
        <img
          src={staticCDN(pokemon.spriteAnimated) || pokemon.spriteAnimated}
          css={[spriteStyle, isCatching && fadeOutEffect]}
          onError={handleImageError}
          width={224}
          height={224}
          alt={`${pokemon.name} sprite`}
          crossOrigin="anonymous"
        />

        <div css={[spacingY, transition, isCatching && fadeOutEffect]}>
          <p css={nameStyle} ref={nameRef}>
            {pokemon.name}
          </p>
          {nickname && <p css={nicknameStyle}>{nickname}</p>}
        </div>

        <PokemonDetail
          isLoading={loading}
          isError={error}
          isCatching={isCatching}
          setIsCatching={setIsCatching}
          pokemon={pokemon}
        />
      </div>
    </Container>
  );
};

export default PokemonDetailPage;
