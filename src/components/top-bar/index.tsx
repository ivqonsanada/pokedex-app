/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-akar-icons/chevron-left";
import { useLocation, useNavigate, useParams } from "react-router";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";
import { useTopBar } from "contexts/topbar-context";

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

  const backIconStyle = css({
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgb(100 116 139)",
      borderRadius: "100%",
    },
  });

  const handleBack = () => {
    if (location.key !== "default") navigate(-1);
    else navigate("/", { replace: true });
  };

  return (
    <div css={baseStyle}>
      <p css={containerStyle}>
        {isDeepPath ? (
          <Icon
            icon={chevronLeft}
            css={[iconStyle, backIconStyle]}
            onClick={handleBack}
          />
        ) : (
          <span css={emptyIconStyle}></span>
        )}
        <span css={titleStyle}>{title}</span>
        <span css={emptyIconStyle}></span>
      </p>
    </div>
  );
};

export default TopBar;
