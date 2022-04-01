import styled from "styled-components";

const AboutPage = () => {
    return (
        <Section>
            <SectionCenter>
                <Title>About</Title>
                <SubTitle>Want to know me?</SubTitle>
                <Content>
                    <ContentParagraph>
                        I am Swasthik Shetty; A seasoned developer and designer. Loves to learn and explore new technologies and share the knowledge back to the community. I love to contribute and talk about the open-source while spending most of my time designing or on GitHub. 
                    </ContentParagraph>
                    <ContentParagraph>
                        I am a Third-year Information Science Engineering student from Mangaluru, India. I am a GitHub Campus Expert; Microsoft Student Learn Ambassador, Lead of Hack Club Sahyadri, President of CodeChef SCEM, Developer at codezoned, Technical Head of Sahyadri Open-Source Community and Game Development Head of Mozilla Club Sahyadri. 
                    </ContentParagraph>
                </Content>
            </SectionCenter>
        </Section>
    );
}

export default AboutPage;


const Section = styled.section`
    /* border: 2px solid red; */
    width: 100%;
    min-height: 100vh;
    display: table;
`
const SectionCenter = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: space-evenly;
    
    display: table-cell;
    vertical-align: middle;
    text-align:center
`
const Title = styled.h1`
    font-size: 20vh;
    font-weight: 500;
    line-height: 23vh;
    margin: 0;
`

const SubTitle = styled.p`
    font-size: 2.5vh;
    margin-top: 0;
`

const Content = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const ContentParagraph = styled.p`
    font-size: 3vh;
    line-height: 4.5vh;
    text-align: justify;
`

