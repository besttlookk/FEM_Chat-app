import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-left: 0.8rem;
`;

const Picture = ({ imageNo }: { imageNo: string }) => {
  return (
    <Wrapper>
      <Image
        alt="animal-image"
        src={`/images/dog-image-${imageNo}.jpg`}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Wrapper>
  );
};

export default Picture;
