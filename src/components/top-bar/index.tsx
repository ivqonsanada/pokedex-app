/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-akar-icons/chevron-left";
import heartFilled from "@iconify/icons-ant-design/heart-filled";
import { useEffect } from "react";
import { useLocation } from "react-router";

const TopBar = () => {
  const location = useLocation();

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
    background: "white",
    padding: "16px 0",
    width: "100%",
    maxWidth: "414px",
    margin: 0,
  });

  const textStyle = css({
    fontWeight: "bold",
  });

  const iconStyle = css({
    width: "1.5em",
    height: "1.5em",
    // position: "absolute",
    top: 0,
  });

  const heartIconStyle = css({
    color: "black",
    opacity: 0.4,
  });

  useEffect(() => {
    console.log(location);
  });

  return (
    <div css={baseStyle}>
      <p css={containerStyle}>
        <Icon icon={chevronLeft} css={iconStyle} />
        <span css={textStyle}>Pokédex</span>
        <Icon icon={heartFilled} css={[iconStyle, heartIconStyle]} />
      </p>
    </div>
  );
};

export default TopBar;
