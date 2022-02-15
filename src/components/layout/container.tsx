/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavMenu from "components/nav-menu";
import TopBar from "components/top-bar";

const Container: React.FC = ({ children }) => {
  const containerStyle = css({
    maxWidth: 414,
    margin: "0 auto",
    padding: "68px 0 80px",
    minHeight: "100vh",
    backgroundColor: "rgb(15 23 42)",
  });

  return (
    <div css={containerStyle}>
      <TopBar />
      {children}
      <NavMenu />
    </div>
  );
};

export default Container;
