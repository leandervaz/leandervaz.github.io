import Image from 'next/image';
import styled from 'styled-components';
import MapMeCover from '../public/assets/images/portfolio/mapme/cover.png';
import MapMeSnapShot from '../public/assets/images/portfolio/mapme/snapshot.png';
import HaloCover from '../public/assets/images/portfolio/halo/cover.png';
import HaloSnapShot from '../public/assets/images/portfolio/halo/snapshot.png';
import GitGoCover from '../public/assets/images/portfolio/gitgo/cover.png';
import GitGoSnapShot from '../public/assets/images/portfolio/gitgo/snapshot.png';
import Link from 'next/link';
import { device } from '../styles/responsive';


const ProjectPage = () => {
    return (
        <Section>
            <Title>Projects</Title>
            <SubTitle>Checkout some cool stuffs I've built</SubTitle>

            <Projects>
                <Project>
                    <ProjectTitle>MapMe</ProjectTitle>
                    <ProjectCover>
                        <Image placeholder='blur' src={MapMeCover} alt={"MapMe"}/>
                    </ProjectCover>
                    <ProjectDescription>
                        <ProjectSnapShotLeft>
                            <Image placeholder='blur'  src={MapMeSnapShot} alt={"MapMe"}/>
                        </ProjectSnapShotLeft>
                        <ProjectContentRight>
                            <ProjectLink href="https://mapme.swaaz.dev" target={'_blank'} >MapMe</ProjectLink> is an OpenSource Cross Platform App to track wherever you go!
                        </ProjectContentRight>
                    </ProjectDescription>
                </Project>

                <Project>
                    <ProjectTitle>Halo</ProjectTitle>
                    <ProjectCover>
                        <Image placeholder='blur'  src={HaloCover} alt={"Halo"}/>
                    </ProjectCover>
                    <ProjectDescription>
                        <ProjectContentLeft>
                            <ProjectLink href="https://mapme.swaaz.dev" target={'_blank'} >Halo</ProjectLink> is an open-source game we community folks built in a Hackathon.
                        </ProjectContentLeft>
                        <ProjectSnapShotRight>
                            <Image  placeholder='blur'  src={HaloSnapShot} alt={"Halo"}/>
                        </ProjectSnapShotRight>

                    </ProjectDescription>
                </Project>

                <Project>
                    <ProjectTitle>GitGo</ProjectTitle>
                    <ProjectCover>
                        <Image  placeholder='blur'  src={GitGoCover} alt={"GitGo"}/>
                    </ProjectCover>
                    <ProjectDescription>
                        <ProjectContentLeft>
                            What's it like to create your first pull request on GitHub? <ProjectLink href="https://mapme.swaaz.dev" target={'_blank'} >GitGo</ProjectLink> has a fun exercise to instruct you how to do so.
                        </ProjectContentLeft>
                        <ProjectSnapShotRight>
                            <Image placeholder='blur'  src={GitGoSnapShot} alt={"GitGo"}/>
                        </ProjectSnapShotRight>
                    </ProjectDescription>
                </Project>

                <ProjectsLink>
                    <Link href="/projects">Excited to see more work?</Link>
                </ProjectsLink>

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

    @media ${device.tabletM} {
        font-size: 13vh;
    }
    @media ${device.mobileL} {
        font-size: 11vh;
    }
    @media ${device.mobileM} {
        font-size: 8vh;
    }
`
const SubTitle = styled.p`
    font-size: 2.5vh;
    margin-top: 0;

    @media ${device.tabletM}{
        font-size: 2vh;
        margin-top: -2vh;
    }
    @media ${device.mobileL} {
        font-size: 1.8vh;
        margin-top: -3vh;
    }
    @media ${device.mobileM} {
        font-size: 1.5vh;
        margin-top: -5vh;
    }
`

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 100px; */
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 50px auto;

    @media ${device.tabletM} {
        width: 90%;
    }

    img{
        filter: grayscale(90%);
        -webkit-filter: grayscale(90%);
        -webkit-transition: all .5s ease-in-out;  


        &:hover{
            /* cursor: pointer; */
            filter: none;
            -webkit-filter: grayscale(0);
        }
    }
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

const ProjectSnapShotRight = styled.div`
    width: 50%;
    margin-top: -15%;
    margin-right: -10%;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,.3));


    @media ${device.tabletM} {
        margin-right: -5%;
        margin-top: -50%;
    }
`

const ProjectContentLeft = styled.div`
    margin-top: 5%;
    width: 40%;
    font-size: 2.8vh;

    @media ${device.tabletM} {
        font-size: 1.8vh;
    }

`

const ProjectSnapShotLeft = styled(ProjectSnapShotRight)`
    width: 30%;

    @media ${device.tabletM} {
        margin-right: -10%;
        margin-top: -15%;
    }
`

const ProjectContentRight = styled(ProjectContentLeft)`
    width: 40%;
`

const ProjectLink = styled.a`
    text-decoration: none;
    font-weight: 700;
`

const ProjectsLink = styled.a`
    font-size: 2.5vh;
    text-decoration: underline;
    margin: 20px 0;

    @media ${device.tabletM} {
        font-size: 2vh;
    }

`