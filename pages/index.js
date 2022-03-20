import CoverPage from "../components/CoverPage";
import styled from 'styled-components';
import AboutPage from "../components/AboutPage";
import ProjectPage from "../components/ProjectPage";

const Home = () => {
  return (
    <Section>
      <CoverPage />
      <AboutPage />
      <ProjectPage />
    </Section>
  );
}

export default Home;


const Section = styled.div`
  width : 100%;
  margin: 0;
  padding: 0;
`