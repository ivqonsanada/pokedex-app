/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavMenu from "components/nav-menu";
import TopBar from "components/top-bar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Container: React.FC = ({ children }) => {
  const [isDeepPath, setIsDeepPath] = useState(false);
  const location = useLocation();

  const containerStyle = css({
    maxWidth: 414,
    margin: "0 auto",
    padding: "64px 0 96px",
    minHeight: "100vh",
    backgroundColor: "rgb(15 23 42)",
    overflowX: "hidden",
  });

  useEffect(() => {
    if (location.pathname.match(/\/pokemon\//)) setIsDeepPath(true);
    else setIsDeepPath(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div css={containerStyle}>
      <TopBar isDeepPath={isDeepPath} />
      {children}
      <NavMenu isDeepPath={isDeepPath} />
    </div>
  );
};

export default Container;
