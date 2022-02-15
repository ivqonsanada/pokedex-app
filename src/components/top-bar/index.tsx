/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-akar-icons/chevron-left";
// import heartFilled from "@iconify/icons-ant-design/heart-filled";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useWindowScrollPositions } from "hooks/useWindowScrollPositions";

const TopBar = () => {
  const [isDeepPath, setIsDeepPath] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useWindowScrollPositions();

  const baseStyle = css({
    position: "fixed",
    top: 0,
    width: "100%",
    maxWidth: "414px",
  });

  const containerStyle = css({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: scrollY === 0 ? "rgb(15 23 42)" : "rgb(51 65 85)",
    opacity: 1,
    padding: "8px 0",
    width: "100%",
    maxWidth: "414px",
    margin: 0,
  });

  const textStyle = css({
    fontWeight: "bold",
    fontSize: "1.5em",
  });

  const iconStyle = css({
    width: "1.5em",
    height: "1.5em",
    padding: "0.75em",
    // position: "absolute",
    top: 0,
  });

  const backIconStyle = css({
    cursor: "pointer",
  });

  //   const heartIconStyle = css({
  //     color: "white",
  //     opacity: 0.4,
  //     cursor: "pointer",
  //   });

  useEffect(() => {
    console.log(location);
    if (location.pathname.match(/\/pokemon\//)) setIsDeepPath(true);
    else setIsDeepPath(false);
  }, [location]);

  const handleBack = () => {
    navigate(-1);
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
          <span css={iconStyle}></span>
        )}
        <span css={textStyle}>Pokédex</span>
        {/* <Icon icon={heartFilled} css={[iconStyle, heartIconStyle]} /> */}
        <span css={iconStyle}></span>
      </p>
    </div>
  );
};

export default TopBar;
