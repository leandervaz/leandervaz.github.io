import styled from "styled-components";
import Image from "next/image";
import swaazVector from '../public/assets/images/swaaz.png';
import instagramLogo from '../public/assets/images/insta.png';
import githubLogo from '../public/assets/images/github.png';
import linkedinLogo from '../public/assets/images/li.png';
import twitterLogo from '../public/assets/images/twit.png';
import lineVector from '../public/assets/images/line.png';


const CoverPage = () => {
    return (
        <Section>
            <SectionCenter>
                <Cover>
                    <CoverPageLeft>
                        <HeaderLine>Hey,</HeaderLine>
                        <HeaderLine>I'm</HeaderLine>
                        <HeaderLine>Swaaz</HeaderLine>
                    </CoverPageLeft>
                    <CoverPageRight>
                        <Image src={swaazVector} alt={"swaaz"}/>
                    </CoverPageRight>
                </Cover>

                <SocialMedia>
                    <SocialMediaItem href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image src={githubLogo} alt={"github"}/>
                    </SocialMediaItem>
                    <SocialMediaItem href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image src={linkedinLogo} alt={"LinkedIn"}/>
                    </SocialMediaItem>
                    <SocialMediaItem href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image src={twitterLogo} alt={"Twitter"}  />
                    </SocialMediaItem>
                    <SocialMediaItemInsta href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image src={instagramLogo} alt={"Instagram"}/>
                    </SocialMediaItemInsta>
                    <SocialLine>
                        <Image src={lineVector} alt={"line"}/>
                    </SocialLine>
                </SocialMedia>
            </SectionCenter>
        </Section>
    );
}

export default CoverPage;


const Section = styled.section`
    width : 95%;
    margin: 0 auto;
    min-height : 100vh;
    /* border: 2px solid red; */
    display: table;
`

const SectionCenter = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: flex-start;
    justify-content: space-evenly;
    display: table-cell;
    vertical-align: middle;
    text-align:center
`

const Cover = styled.div`
    display: flex ;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    /* border: 2px solid red; */
`

const CoverPageLeft = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    /* padding-left: 20px; */
    /* border: 2px solid red; */

`

const CoverPageRight = styled.div`
    width: 40%;
    /* border: 2px solid red; */

    img {
        width: 100%;
    }

`
const HeaderLine = styled.h1`
    font-size: 25vh;
    font-weight: 700;
    line-height: 23vh;
    margin: 0;
`

const SocialMedia = styled.div`
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
        /* border: 2px solid red; */

`

const SocialMediaItem = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    width: 60px;

    img{
        width: 100%;
    }
`

const SocialMediaItemInsta = styled(SocialMediaItem)`
    width: 40px;
    margin: 0 10px;
`

const SocialLine = styled.div`
    width: 20%;
`