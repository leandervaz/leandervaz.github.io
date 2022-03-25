import Image from 'next/image';
import styled from 'styled-components';
import gitHubIcon from '../../public/assets/images/github.png';
import webIcon from '../../public/assets/images/web.png';
import TechStackList from '../../components/TechStackList';
import ProjectsData from '../../data';

const ProjectDetails = ({ project }) => {
    return (
        <Section>
            <Title>{project.name}</Title>

            <Cover>
                <Image width={project.width} height={project.height} src={project.image} alt={project.slug}/>
            </Cover>

            <LinkRow>
                <GitHubLink href={project.githubLink} target={'_blank'}>
                    <Image quality={50} width={50} height={50} src={gitHubIcon} alt={"GitHub"}/>
                    <p>GitHub</p>
                </GitHubLink>
                {
                    project.websiteLink &&
                    <WebLink href={project.websiteLink} target={'_blank'}>
                        <Image quality={50} width={35} height={35} src={webIcon} alt={"Web"} />
                        <p>Web</p>
                    </WebLink>
                }
            </LinkRow>

            <Description>
                <SubTitle>Description</SubTitle>
                <DescriptionText>
                    {project.description}
                </DescriptionText>
            </Description>

            <TechStack>
                <SubTitle>Tech Stack</SubTitle>
                <TechStackLists>
                    {
                        project.techStack.map((techStack, index) => (
                            <TechStackList key={index} text={techStack} />
                        ))
                    }
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
    margin: 5vh 0;
`

const GitHubLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 5vw;

`

const WebLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 5vw;

    p{
        margin-left: 10px;
    }
`

const Description = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;

`

const SubTitle = styled.h2`
    font-size: 4vh;
    font-weight: 500;
    /* line-height: 23vh; */
    margin: 5px 0;
`

const DescriptionText = styled.p`
    margin: 0 auto;
    font-size: 2.2vh;
    line-height: 3.8vh;
    /* align-self: flex-start; */

`
const TechStack = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 0;
`

const TechStackLists = styled.div`
    margin: 10px 0;
`



export const getStaticPaths = async () => {
    const paths = ProjectsData.map(project => {
        return {
            params: {
                name: project.slug
            }
        }
    })
    return { paths, fallback: false };
}


export const getStaticProps = async (context) => {

    const { params } = context;
    const project = ProjectsData.find(project => project.slug === params.name);
   

    if(!project) {
        return{
            notFound: true
        }
    }

    return {
        props:{
            project
        }
    }
}
