/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css({
  maxWidth: 414,
  margin: "0 auto",
});

const Container: React.FC = ({ children }) => {
  return <div css={containerStyle}>{children}</div>;
};

export default Container;
