import React from "react";
import styled from "styled-components";
import Footer from "../layouts/Footer";
import GlobalStyle from "./GlobalStyles";
import media from "./media";

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  width: 60%;
  height: 70%;
  border-bottom-right-radius: 1000px;
  background-image: linear-gradient(
    60deg,
    hsl(264, 100%, 61%) 60%,
    hsl(293, 100%, 63%)
  );

  ${media.tablet} {
    width: 30%;
    height: 90%;
    left: -15px;
    border-bottom-left-radius: 300px;
    border-bottom-right-radius: 300px;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <GradientBackground />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
