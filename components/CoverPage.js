import styled from "styled-components";
import Image from "next/image";
import swaazVector from '../public/assets/images/swaaz.png';
import instagramLogo from '../public/assets/images/insta.png';
import githubLogo from '../public/assets/images/github.png';
import linkedinLogo from '../public/assets/images/li.png';
import twitterLogo from '../public/assets/images/twit.png';
import lineVector from '../public/assets/images/line.png';
import { device } from "../styles/responsive";

const CoverPage = () => {
    return (
        <Section>
            <Wrapper>
                <SectionCenter>
                <Cover>
                    <CoverPageLeft>
                        <HeaderLine>Hey,</HeaderLine>
                        <HeaderLine>I'm</HeaderLine>
                        <HeaderLine>Swaaz</HeaderLine>
                    </CoverPageLeft>
                    <CoverPageRight>
                        <Image
                            src={swaazVector}
                            alt={"swaaz"}
                            width={779}
                            height={779}
                            priority={true}
                            layout={'responsive'}
                        />
                    </CoverPageRight>
                </Cover>

                <SocialMedia>
                    <SocialMediaItem href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image quality={50} width={50} height={50} src={githubLogo} alt={"github"}/>
                    </SocialMediaItem>
                    <SocialMediaItem href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image quality={50} width={50} height={50} src={linkedinLogo} alt={"LinkedIn"}/>
                    </SocialMediaItem>
                    <SocialMediaItem href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image quality={50} width={50} height={50} src={twitterLogo} alt={"Twitter"}  />
                    </SocialMediaItem>
                    <SocialMediaItemInsta href="https://www.github.com/swaaz" target={"_blank"} >
                        <Image quality={50} width={30} height={30} src={instagramLogo} alt={"Instagram"}/>
                    </SocialMediaItemInsta>
                    <SocialLine>
                        <Image quality={50} src={lineVector} alt={"line"}/>
                    </SocialLine>
                </SocialMedia>
            </SectionCenter>
            </Wrapper>
        </Section>
    );
}

export default CoverPage;


const Section = styled.section`
    width : 90%;
    margin: 0 auto;
    min-height : 100vh;
    /* border: 2px solid red; */
    display: table;

    @media ${device.laptopM} {
        width : 95%;
    }
`
const Wrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`

const SectionCenter = styled.div`
    display: flex;
    flex-direction: column ;
    /* align-items: flex-start; */
    justify-content: space-evenly;

    @media ${device.tabletM} {
        flex-direction: column-reverse;
    }
    
`

const Cover = styled.div`
    display: flex ;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    width: 100%;

    /* border: 2px solid red; */

    @media ${device.tabletM} {
        flex-direction: column;
        align-items: center;
    }
`

const CoverPageLeft = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    /* padding-left: 20px; */
    /* border: 2px solid red; */

    @media ${device.tabletM} {
        width : 100%;
    }

`

const CoverPageRight = styled.div`
    width: 40%;
    /* border: 2px solid red; */

    @media ${device.tabletM} {
        width: 60%;
    }
    @media ${device.mobileL} {
        width: 100%;
    }

`
const HeaderLine = styled.h1`
    font-size: 30vh;
    font-weight: 700;
    line-height: 30vh;
    margin: 0;

    @media ${device.laptopL} {
        font-size: 27vh;
        line-height: 25vh;
    }
    @media ${device.laptopM} {
        font-size: 25vh;
        line-height: 23vh;
    }
    @media ${device.laptopS} {
        font-size: 23vh;
        line-height: 21vh;
    }
    @media ${device.tabletM} {
        font-size: 20vh;
        line-height: 18vh;
    }
    @media ${device.tabletS} {
        font-size: 17vh;
        line-height: 17vh;
    }
    @media ${device.mobileL} {
        font-size: 13vh;
        line-height: 13vh;
    }
    @media ${device.mobileM} {
        font-size: 12vh;
        line-height: 12vh;
    }
    @media ${device.mobileS} {
        font-size: 11vh;
        line-height: 11vh;
    }

`

const SocialMedia = styled.div`
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    /* border: 2px solid red; */

    @media ${device.tabletM} {
        padding-top: 50px;
    }

`

const SocialMediaItem = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    width: 60px;

    @media ${device.tabletM} {
        width: 40px;
    }
`

const SocialMediaItemInsta = styled(SocialMediaItem)`
    width: 40px;
    margin: 0 10px;

    @media ${device.tabletM} {
        margin: 0;
    }
`

const SocialLine = styled.div`
    width: 20%;

    @media ${device.tabletM} {
        display: none;
    }
`