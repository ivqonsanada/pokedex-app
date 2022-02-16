/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-akar-icons/chevron-left";
import { useNavigate, useParams } from "react-router";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";

type Props = {
  isDeepPath: boolean;
};

const TopBar: React.FC<Props> = ({ isDeepPath }) => {
  const navigate = useNavigate();
  const { scrollY } = useWindowScrollPositions();
  const params = useParams();

  const baseStyle = css({
    position: "fixed",
    top: 0,
    width: "100%",
    maxWidth: "414px",
    zIndex: "100",
  });

  const containerStyle = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: scrollY === 0 ? "rgb(15 23 42)" : "rgba(71, 85, 105, 0.75)",
    backdropFilter: "blur(10px)",
    opacity: 1,
    padding: "8px 24px",
    width: "100%",
    maxWidth: "414px",
    height: 64,
  });

  const textStyle = css({
    fontWeight: "bold",
    fontSize: "1.5em",
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
    navigate(-1);
  };

  const formatId = (id: number | string) => {
    if (id) {
      if (id < 10) return "#00" + id;
      if (id < 100) return "#0" + id;
      else return "#" + id;
    } else return "#????";
  };

  const title = params.id ? formatId(params.id) : "Pokédex";

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
        <span css={textStyle}>{title}</span>
        <span css={emptyIconStyle}></span>
      </p>
    </div>
  );
};

export default TopBar;
