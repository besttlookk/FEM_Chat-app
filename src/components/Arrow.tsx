import React from "react";
import styled from "styled-components";

const ArrowEl = styled.div<{ direction: string }>`
  width: 7px;
  height: 7px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;

  ${(p) =>
    p.direction === "right"
      ? "transform: rotate(-45deg)"
      : "transform: rotate(135deg)"}
`;

const Arrow = ({ direction }: { direction: string }) => {
  return <ArrowEl direction={direction} />;
};

export default Arrow;
