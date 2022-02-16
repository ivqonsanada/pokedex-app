/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon, IconifyIcon } from "@iconify/react";
import { Link } from "react-router-dom";

type Props = {
  icon: IconifyIcon;
  name: string;
  path: string;
  isActive?: boolean;
};

const NavItem: React.FC<Props> = ({ icon, name, path, isActive }) => {
  const linkStyle = css({
    textDecoration: "none",
    color: "white",
  });

  const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "36px 0 16px",
    "* + *": {
      marginTop: "4px",
    },
  });

  const activeStyle = css({
    backgroundColor: "rgba(51, 65, 85, 0.75)",
    backdropFilter: "blur(2px)",
    fontWeight: "bold",
  });

  const iconStyle = css({
    position: "absolute",
    top: 4,
    width: "2em",
    height: "2em",
    padding: "4px 4px",
  });

  const activeIconStyle = css({
    transform: "translateY(-40%) scale(1.2)",
    backgroundColor: "rgba(51, 65, 85, 0.75)",
    backdropFilter: "blur(2px)",
    borderRadius: "100%",
  });

  return (
    <Link to={path} css={[linkStyle, isActive && activeStyle]}>
      <p css={containerStyle}>
        <Icon icon={icon} css={[iconStyle, isActive && activeIconStyle]} />
        <span>{name}</span>
      </p>
    </Link>
  );
};

export default NavItem;
