import Image from 'next/image';
import styled from 'styled-components';
import coverImage from '../../public/assets/images/portfolio/mapme/cover.png';
import gitHubIcon from '../../public/assets/images/github.png';
import webIcon from '../../public/assets/images/web.png';
import TechStackList from '../../components/TechStackList';

const ProjectDetails = () => {
    return (
        <Section>
            <Title>MapMe</Title>

            <Cover>
                <Image src={coverImage} alt={"MapMe"}/>
            </Cover>

            <LinkRow>
                <GitHubLink href="" target={'_blank'} >
                    <Image src={gitHubIcon} alt={"GitHub"}/>
                    <p>GitHub</p>
                </GitHubLink>
                <WebLink href="" target={'_blank'} >
                    <Image src={webIcon} alt={"Web"} width={80} height={80} />
                    <p>Web</p>
                </WebLink>
            </LinkRow>

            <Description>
                <DescriptionTitle>Description</DescriptionTitle>
                <DescriptionText>
                    A location tracking application for mobile devices built by The Boys as Minor Project. MapMe tracks your location and give you details on the route, average speed,time and distance covered. To track just tap on 'Start Tracking' and the app will now start collecting your coordinates and starts to draw PolyLines which are used to depict a route from one place to another. You can also view your tracked history and all these details are not collected by us, it is safely stored on your personal device.
                </DescriptionText>
            </Description>

            <TechStack>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <TechStackLists>
                    <TechStackList text={'Next.js'} />
                    <TechStackList text={'React.js'} />
                </TechStackLists>
            </TechStack>
        </Section>
    );
}

export default ProjectDetails;


const Section = styled.section`
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 18vh;
    font-weight: 500;
    line-height: 23vh;
    margin: 0;
`

const Cover = styled.div`
    width: 100%;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,.2));

`

const LinkRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const GitHubLink = styled.a`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const WebLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const DescriptionTitle = styled.h2`
    font-size: 5vh;
    font-weight: 500;
    /* line-height: 23vh; */
    margin: 0;
`

const DescriptionText = styled.p``

const TechStack = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TechStackTitle = styled.h2``

const TechStackLists = styled.div``





