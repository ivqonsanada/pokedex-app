/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { css } from "@emotion/react";

import CatchedState from "./catched-state";
import CatchingState from "./catching-state";
import RunAwayState from "./run-away-state";

type Props = {
  data: any;
  state: string;
  closeModal: () => void;
  handleState: () => void;
};

const CatchModal: React.FC<Props> = ({ data, state, closeModal, handleState }) => {
  const containerStyle = css({
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    maxWidth: "360px",
    padding: "18px 24px",
    borderRadius: "0.4em",
    backgroundColor: "rgb(30 41 59)",
    transition: "1s ease",
    zIndex: 101,
    marginTop: "60px",
    img: {
      marginTop: "-30%",
    },
    "> * + *": {
      marginTop: "24px",
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleState();
    }, 2500);

    return () => {
      clearTimeout(timeoutId);

      const htmlElement = document.getElementsByTagName("html")[0];
      htmlElement.style.overflowY = "scroll";
    };
  }, [handleState]);

  return (
    <div css={containerStyle}>
      {state === "Catching" && <CatchingState />}
      {state === "Run Away" && <RunAwayState handleClose={closeModal} />}
      {state === "Catched" && <CatchedState handleClose={closeModal} data={data} />}
    </div>
  );
};

export default CatchModal;
