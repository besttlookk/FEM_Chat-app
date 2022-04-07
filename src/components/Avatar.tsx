import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid white;
  overflow: hidden;
`;

const Avatar = () => {
  return (
    <Wrapper>
      <Image
        alt="avatar"
        src="/images/avatar.jpg"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </Wrapper>
  );
};

export default Avatar;
