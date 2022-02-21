/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useLocation } from "react-router";
import { ApolloError } from "@apollo/client";
import { css } from "@emotion/react";

import { useQueryParams } from "hooks/useQueryParams";
import PokemonDetailAbout from "./about";
import CatchButton from "./catch-button";
import CatchModal from "./catch-modal";
import MoveList from "./move-list";
import StatList from "./stat-list";
import TypeList from "./type-list";

type Props = {
  isLoading: boolean;
  isError: ApolloError | undefined;
  isCatching: boolean;
  setIsCatching: (isCatching: boolean) => void;
  pokemon: any;
};

const PokemonDetail: React.FC<Props> = ({
  isLoading,
  isError,
  isCatching,
  setIsCatching,
  pokemon,
}) => {
  const location = useLocation();
  const { nickname } = useQueryParams(location.search);
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState("Catching");

  const subHeadingStyle = css({
    fontWeight: "bold",
    color: "rgb(203 213 225)",
    padding: "0 4px",
    marginBottom: "16px",
  });

  const transition = css({ transition: `0.4s ease` });
  const fadeOutEffect = css({ opacity: 0 });
  const spacingY = css({ "> * + *": { marginTop: "24px" } });

  const handleCatch = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.style.overflowY = "hidden";

    setIsCatching(true);

    setTimeout(() => {
      setShowModal(true);
    }, 1600);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsCatching(false);
    setState("Catching");
  };

  const handleState = () => {
    const isCatched = Math.random() > 0.5;
    if (isCatched) setState("Catched");
    else setState("Run Away");
  };

  const loadingStyle = css({
    color: "rgb(100 116 139)",
  });

  return (
    <>
      <div css={[spacingY, transition, isCatching && fadeOutEffect]}>
        <TypeList data={pokemon.types} />
      </div>

      {isLoading && <p css={loadingStyle}>Loading...</p>}
      {isError && <p css={loadingStyle}>Seems something bad happen to the server.</p>}

      {!isLoading && !nickname && (
        <CatchButton
          handleClick={handleCatch}
          isCatching={isCatching}
          isModalOpen={showModal}
        />
      )}
      {showModal && (
        <CatchModal
          data={pokemon}
          state={state}
          handleState={handleState}
          closeModal={handleCloseModal}
        />
      )}

      {!isLoading && (
        <div css={[spacingY, transition, isCatching && fadeOutEffect]}>
          <div>
            <p css={subHeadingStyle}>About</p>
            <PokemonDetailAbout data={pokemon.about} moves={pokemon.moves.length} />
          </div>
          <div>
            <p css={subHeadingStyle}>Stats</p>
            <StatList data={pokemon.stats} />
          </div>
          <div>
            <p css={subHeadingStyle}>Moves</p>
            <MoveList data={pokemon.moves} />
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
