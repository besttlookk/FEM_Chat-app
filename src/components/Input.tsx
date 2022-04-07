import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";

const InputEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  overflow: hidden;
  width: 100%;
  height: 3.6rem;
  background-color: var(--col-white);
  color: var(--col-gray);
  padding: 1.5rem;
  padding-right: 0.5rem;
  margin-top: 1rem;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background-color: var(--col-submit-btn);
    padding-right: 0.3rem;
  }
`;

const Input = () => {
  return (
    <InputEl>
      <p>Type a message</p>
      <div className="button">
        <Arrow direction="right" />
      </div>
    </InputEl>
  );
};

export default Input;
