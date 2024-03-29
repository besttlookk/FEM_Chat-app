import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Content from "../components/Content";
import Mockup from "../components/Mockup";
import { Footer } from "../layouts";
import media from "../styles/media";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 90vw;
  margin-inline: auto;
  z-index: 10;

  ${media.tablet} {
    max-width: 980px;
    padding: 0 1rem;
    flex-direction: row;
    gap: 6 rem;
  }

  ${media.laptop} {
    gap: 14rem;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CSS Chat App | Fem</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Mockup />
        <Content />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
