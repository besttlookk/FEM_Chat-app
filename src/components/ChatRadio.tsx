import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-right: auto;
  background-image: linear-gradient(
    to right,
    hsl(293, 100%, 63%),
    hsl(264, 100%, 61%) 50%
  );
  padding: 0.8rem 1.6rem;
  border-radius: 1rem;
  border-bottom-left-radius: 0;
`;

const RadioBtn = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid var(--col-gray);

  ${media.tablet} {
    width: 15px;
    height: 15px;
  }
`;

const Text = styled.p`
  flex: 1;
  color: var(--col-light);
  font-weight: 500;
  font-size: 0.9rem;

  ${media.tablet} {
    font-size: 1rem;
  }
`;

const Price = styled.p`
  color: var(--col-white);
  font-weight: 700;
  font-size: 1.3rem;
`;

const ChatRadio = ({
  children,
  price,
}: {
  children: string;
  price: string;
}) => {
  return (
    <Wrapper>
      <RadioBtn />
      <Text>{children}</Text>
      <Price>{price}</Price>
    </Wrapper>
  );
};

export default ChatRadio;
