import styled from 'styled-components';
import MapMeCover from '../../public/assets/images/portfolio/mapme/cover.png';
import MapMeSnapShot from '../../public/assets/images/portfolio/mapme/snapshot.png';
import HaloCover from '../../public/assets/images/portfolio/halo/cover.png';
import HaloSnapShot from '../../public/assets/images/portfolio/halo/snapshot.png';
import GitGoCover from '../../public/assets/images/portfolio/gitgo/cover.png';
import GitGoSnapShot from '../../public/assets/images/portfolio/gitgo/snapshot.png';
import { device } from '../../styles/responsive';
import Image from 'next/image';
import HealthqueCover from '../../public/assets/images/portfolio/healthque/cover.png';
import HealthqueSnapShot from '../../public/assets/images/portfolio/healthque/snapshot.png';
import PryceyCover from '../../public/assets/images/portfolio/prycey/cover.png';
import PryceySnapShot from '../../public/assets/images/portfolio/prycey/snapshot.png';
import HackSOSCCover from '../../public/assets/images/portfolio/hacksosc/cover.png';
import HackSOSCSnapShot from '../../public/assets/images/portfolio/hacksosc/snapshot.png';
import Footer from '../../components/Footer';

const Projects = () => {
    return (
        <>
        <Section>
            <Title>Projects</Title>

            <ProjectsSection>

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
                    <ProjectTitle>Healthque</ProjectTitle>
                    <ProjectCover>
                        <Image placeholder='blur' src={HealthqueCover} alt={"Healthque"}/>
                    </ProjectCover>
                    <ProjectDescription>
                        <ProjectSnapShotLeft>
                            <Image placeholder='blur'  src={HealthqueSnapShot} alt={"Healthque"}/>
                        </ProjectSnapShotLeft>
                        <ProjectContentRight>
                            <ProjectLink href="https://mapme.swaaz.dev" target={'_blank'} >Healthque</ProjectLink> is a mobile application to store and maintain digital health records.
                        </ProjectContentRight>
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

                <Project>
                    <ProjectTitle>Prycey</ProjectTitle>
                    <ProjectCover>
                        <Image  placeholder='blur'  src={PryceyCover} alt={"Prycey"}/>
                    </ProjectCover>
                    <ProjectDescription>
                        <ProjectContentLeft>
                        Marketplace to buy and sell myriads of products? <ProjectLink href="https://mapme.swaaz.dev" target={'_blank'} >Prycey</ProjectLink> is an online marketplace which aims for simplicity and versatility.
                        </ProjectContentLeft>
                        <ProjectSnapShotRight>
                            <Image placeholder='blur'  src={PryceySnapShot} alt={"Prycey"}/>
                        </ProjectSnapShotRight>
                    </ProjectDescription>
                </Project>

                <Project>
                    <ProjectTitle>HackSOSC</ProjectTitle>
                    <ProjectCover>
                        <Image placeholder='blur' src={HackSOSCCover} alt={"HackSOSC"}/>
                    </ProjectCover>
                    <ProjectDescription>
                        <ProjectSnapShotLeft>
                            <Image placeholder='blur'  src={HackSOSCSnapShot} alt={"HackSOSC"}/>
                        </ProjectSnapShotLeft>
                        <ProjectContentRight>
                        <ProjectLink href="https://mapme.swaaz.dev" target={'_blank'} >Chat Bot</ProjectLink> built during Hackathon using Deep learning and Natural language processing using Python.
                        </ProjectContentRight>
                    </ProjectDescription>
                </Project>

            </ProjectsSection>
        </Section>
        <Footer />
        </>
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

const ProjectsSection = styled.div`
    width: 100%;
    margin: 10vh 0;

    @media ${device.tabletM} {
        margin: 0;
        margin-bottom: 5vh;
    }
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
