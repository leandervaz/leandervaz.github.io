import CoverPage from "../components/CoverPage";
import styled from 'styled-components';
import AboutPage from "../components/AboutPage";
import ProjectPage from "../components/ProjectPage";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Section>
      <CoverPage />
      <AboutPage />
      <ProjectPage />
      <Contact />
      <Footer />
    </Section>
  );
}

export default Home;


const Section = styled.div`
  width : 100%;
  margin: 0;
  padding: 0;
`