import CoverPage from "../components/CoverPage";
import styled from 'styled-components';

const Home = () => {
  return (
    <Section>
      <CoverPage />
    </Section>
  );
}

export default Home;


const Section = styled.div`
  width : 100%;
  margin: 0;
  padding: 0;
`