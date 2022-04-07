import React from "react";
import styled from "styled-components";
import Picture from "./Picture";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 60%;
  margin-left: auto;
`;

const ChatImage = () => {
  return (
    <Wrapper>
      <Picture imageNo="1" />
      <Picture imageNo="2" />
      <Picture imageNo="3" />
    </Wrapper>
  );
};

export default ChatImage;
