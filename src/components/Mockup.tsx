import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import ChatHeader from "./ChatHeader";
import ChatImage from "./ChatImage";
import ChatRadio from "./ChatRadio";
import ChatText from "./ChatText";
import Input from "./Input";

const Wrapper = styled.div`
  background-color: var(--col-white);
  width: 280px;
  border-radius: 3rem;
  margin-inline: auto;
  box-shadow: 0 10px 75px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  overflow: hidden;

  ${media.tablet} {
    min-width: 280px;
    padding: 1.2rem;
  }
`;

const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem;
  background-color: var(--col-light);
  border-radius: 0 0 2rem 2rem;
  width: 100%;

  ${media.tablet} {
    gap: 0.8rem;
    padding: 1.2rem;
  }
`;

const Mockup = () => {
  return (
    <Wrapper>
      <ChatHeader />
      <ChatBody>
        <ChatText direction="left">
          That sounds great. I’d be happy with that.
        </ChatText>
        <ChatText direction="left">
          Could you send over some pictures of your dog, please?
        </ChatText>
        <ChatImage />
        <ChatText direction="right">
          Here are a few pictures. She’s a happy girl!
        </ChatText>
        <ChatText direction="right">Can you make it?</ChatText>
        <ChatText direction="left">
          That sounds great. I’d be happy with that.
        </ChatText>
        <ChatRadio price="$29"> 30 minute walk</ChatRadio>
        <ChatRadio price="$49"> 1 hour walk</ChatRadio>
        <Input />
      </ChatBody>
    </Wrapper>
  );
};

export default Mockup;
