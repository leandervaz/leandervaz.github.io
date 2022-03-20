import Image from 'next/image';
import styled from 'styled-components';
import MapMeCover from '../public/assets/images/portfolio/mapme/cover.png';
import MapMeSnapShot from '../public/assets/images/portfolio/mapme/snapshot.png';

const ProjectPage = () => {
    return (
        <Section>
            <Title>Projects</Title>
            <SubTitle>Checkout some cool stuffs I've built</SubTitle>

            <Projects>
                <Project>
                    <ProjectTitle>MapMe</ProjectTitle>
                    <ProjectCover>
                        <Image src={MapMeCover} alt={"MapMe"}/>
                    </ProjectCover>
                    <ProjectDescription>
                        <ProjectSnapShot>
                            <Image src={MapMeSnapShot} alt={"MapMe"}/>
                        </ProjectSnapShot>
                        <ProjectContent>
                            <ProjectLink href="https://mapme.swaaz.dev" target={'_blank'} >MapMe</ProjectLink> is an OpenSource Cross Platform App to track wherever you go!
                        </ProjectContent>
                    </ProjectDescription>
                </Project>
                
            </Projects>
        </Section>
    );
}

export default ProjectPage;

const Section = styled .section`
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
const SubTitle = styled.p`
    font-size: 2.5vh;
    margin-top: 0;
`

const Projects = styled.div`
    margin-top: 100px;
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`

const ProjectTitle = styled.h2`
    font-size: 4vh;
`

const ProjectCover = styled.div`
    filter: drop-shadow(0 4px 12px rgba(0,0,0,.2));
`

const ProjectDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ProjectSnapShot = styled.div`
    width: 30%;
    margin-top: -15%;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,.3));
`

const ProjectContent = styled.div`
    width: 40%;
    font-size: 2.8vh;

`

const ProjectLink = styled.a`
    text-decoration: none;
    font-weight: 700;
`
