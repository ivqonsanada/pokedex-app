/** @jsxImportSource @emotion/react */

import uiUserProfile from "@iconify/icons-healthicons/ui-user-profile";
import baselineCatchingPokemon from "@iconify/icons-ic/baseline-catching-pokemon";
import NavItem from "./nav-item";
import { useLocation } from "react-router";
import { css } from "@emotion/react";

const NavMenu = () => {
  const location = useLocation();

  const baseStyle = css({
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 100,
  });

  const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "100%",
    borderTop: "solid 1px #c0c0c0",
  });

  const items = [
    {
      icon: baselineCatchingPokemon,
      name: "Catch Pokemon",
      path: "/",
    },
    {
      icon: uiUserProfile,
      name: "My Pokemon",
      path: "/my-pokemon",
    },
  ];

  return (
    <div css={baseStyle}>
      <div css={containerStyle}>
        {items.map((item) => {
          return (
            <NavItem
              {...item}
              key={item.path}
              isActive={location.pathname === item.path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NavMenu;
