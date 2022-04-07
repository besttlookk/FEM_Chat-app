import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Credit = styled.footer`
  position: absolute;
  display: none;
  bottom: 50px;
  margin-top: 5rem;
  margin-inline: auto;
  font-size: 1.8rem;
  width: 90vw;
  max-width: 980px;
  color: var(--col-desaturated-blue);
  text-align: center;

  ${media.tablet} {
    display: block;
  }

  ${media.tablet} {
    margin-top: 3rem;
  }

  a {
    color: var(--grad-violet);
    font-weight: 700;
  }
`;

const Footer = () => {
  return (
    <Credit>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/besttlookk"
        target="_blank"
        rel="noreferrer"
      >
        Prabhash Ranjan
      </a>
      .
    </Credit>
  );
};

export default Footer;
