import styled from 'styled-components';
const Projects = () => {
    return (
        <Section>
            <Title>Projects</Title>

            <ProjectsSection>
                
            </ProjectsSection>
        </Section>
    );
}

export default Projects;


const Section = styled.section`
    width : 100%;
    min-height : 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-size: 20vh;
    font-weight: 500;
    line-height: 23vh;
    margin: 0;
`

const ProjectsSection = styled.div``

const Project = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center ;
`

const ProjectImage = styled.div`

`

const ProjectContent = styled.div``

