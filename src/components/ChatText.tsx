import React from "react";
import styled, { css } from "styled-components";
import media from "../styles/media";

const Wrapper = styled.div<{ direction: string }>`
  max-width: 60%;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
  line-height: 1.2;
  color: var(--col-gray-dark);

  ${(p) =>
    p.direction === "right"
      ? css`
          margin-left: auto;
          background-color: var(--col-white);
          border-bottom-right-radius: 0;
        `
      : css`
          margin-right: auto;
          background-color: hsla(276, 55%, 52%, 0.1);
          border-bottom-left-radius: 0;
        `}

  ${media.tablet} {
    font-size: 1rem;
    max-width: 70%;
  }
`;

const ChatText = ({
  children,
  direction,
}: {
  children: string;
  direction: string;
}) => {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};

export default ChatText;
