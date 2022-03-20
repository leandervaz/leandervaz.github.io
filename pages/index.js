import CoverPage from "../components/CoverPage";
import styled from 'styled-components';
import AboutPage from "../components/AboutPage";

const Home = () => {
  return (
    <Section>
      <CoverPage />
      <AboutPage />
    </Section>
  );
}

export default Home;


const Section = styled.div`
  width : 100%;
  margin: 0;
  padding: 0;
`