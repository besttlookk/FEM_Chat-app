import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Wrapper = styled.div`
  text-align: center;

  h1 {
    color: var(--col-violet-dark);
    font-size: 3.4rem;
    font-weight: 500;
    letter-spacing: 0.6px;

    ${media.tablet} {
      font-size: 4rem;
    }
  }

  p {
    color: var(--col-violet-gray);
    line-height: 1.8;
    font-size: 1.4rem;
    margin-top: 2rem;
    max-width: 90%;
    margin-inline: auto;

    ${media.tablet} {
      margin-left: 0;
      max-width: 80%;
      font-size: 1.6rem;
    }
  }

  ${media.tablet} {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Content = () => {
  return (
    <Wrapper>
      <h1>Simple booking</h1>
      <p>
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </Wrapper>
  );
};

export default Content;
