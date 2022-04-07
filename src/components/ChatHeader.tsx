import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 1.5rem 1.2rem;
  background-image: linear-gradient(
    to right,
    hsl(264, 100%, 61%) 60%,
    hsl(293, 100%, 63%)
  );
  border-radius: 2rem 2rem 0 0;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 40px;
    background-color: var(--col-white);
    border-radius: 16px;
  }

  .left-side {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .right-side {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const Detail = styled.div`
  text-align: left;

  .name {
    color: var(--col-white);
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }

  .available {
    color: var(--col-white);
    opacity: 0.8;
  }
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: var(--col-white);
`;

const ChatHeader = () => {
  return (
    <Wrapper>
      <div className="left-side">
        <Arrow direction="left" />
        <Avatar />
        <Detail>
          <p className="name">Samuel Green</p>
          <p className="available">Available to walk</p>
        </Detail>
      </div>

      <div className="right-side">
        <Dot />
        <Dot />
        <Dot />
      </div>
    </Wrapper>
  );
};

export default ChatHeader;
