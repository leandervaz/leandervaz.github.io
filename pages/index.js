import CoverPage from "../components/CoverPage";
import styled from 'styled-components';
import AboutPage from "../components/AboutPage";
import ProjectPage from "../components/ProjectPage";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ClubsCommunities from "../components/ClubsCommunities";
import Banner from "../components/Banner";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
        <meta charset="utf-8" />
        <meta name="Description" CONTENT="Swasthik Shetty; A curious Full-Stack developer, who loves to learn and explore new technologies and share the knowledge back to the community." />
        <title>swaaz</title>
        <meta name="robots" content="all"/>
    </Head>
    <Section>
      <Banner />
      <CoverPage />
      <AboutPage />
      <ClubsCommunities />
      <ProjectPage />
      <Contact />
      <Footer />
    </Section>
    </>
  );
}

export default Home;


const Section = styled.div`
  width : 100%;
  margin: 0;
  padding: 0;
`