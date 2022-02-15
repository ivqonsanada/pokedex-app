/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavMenu from "components/nav-menu";

const containerStyle = css({
  maxWidth: 414,
  margin: "0 auto",
  padding: "24px 4px 80px",
});

const Container: React.FC = ({ children }) => {
  return (
    <div css={containerStyle}>
      {children}
      <NavMenu />
    </div>
  );
};

export default Container;
