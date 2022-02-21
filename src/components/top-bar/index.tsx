/** @jsxImportSource @emotion/react */

import { useLocation, useNavigate } from "react-router";
import { css } from "@emotion/react";
import chevronLeft from "@iconify/icons-akar-icons/chevron-left";
import { Icon } from "@iconify/react";

import { useTopBar } from "contexts/topbar-context";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";

type Props = {
  isDeepPath: boolean;
};

const TopBar: React.FC<Props> = ({ isDeepPath }) => {
  const { title } = useTopBar();
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useWindowScrollPositions();

  const baseStyle = css({
    position: "fixed",
    top: 0,
    width: "100%",
    maxWidth: "414px",
    zIndex: "101",
  });

  const containerStyle = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: scrollY === 0 ? "rgb(15 23 42)" : "rgba(71, 85, 105, 0.75)",
    backdropFilter: "blur(10px)",
    opacity: scrollY > 0 && location.pathname === "/" ? 0 : 1,
    padding: "8px 24px",
    width: "100%",
    maxWidth: "414px",
    height: 64,
    transition: "0.2s ease",
  });

  const titleStyle = css({
    fontWeight: "bold",
    fontSize: "1.5em",
    textTransform: "capitalize",
  });

  const iconStyle = css({
    width: "1.5em",
    height: "1.5em",
    padding: "0.75em",
    top: 0,
  });

  const emptyIconStyle = css({
    width: "3em",
    height: "3em",
  });

  const backButton = css({
    backgroundColor: "transparent",
    color: "rgb(241 245 249)",
    border: "none",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgb(100 116 139)",
      borderRadius: "100%",
    },
  });

  const handleBack = () => {
    if (location.key !== "default") navigate(-1);
    else navigate("/", { replace: true });

    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.style.overflowY = "scroll";
  };

  return (
    <div css={baseStyle}>
      <div css={containerStyle}>
        {isDeepPath ? (
          <button css={backButton} onClick={handleBack} aria-label="back button">
            <Icon icon={chevronLeft} css={iconStyle} />
          </button>
        ) : (
          <div css={emptyIconStyle}></div>
        )}
        <h1 css={titleStyle}>{title}</h1>
        <div css={emptyIconStyle}></div>
      </div>
    </div>
  );
};

export default TopBar;
