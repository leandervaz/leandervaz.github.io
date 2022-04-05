import Image from "next/image";
import styled from "styled-components";
import heart from "../public/assets/images/heart.png";
import { device } from '../styles/responsive';

const Contact = () => {
    return (
        <Section>
            <Wrapper>
                <Title>Let's talk!</Title>
                <SubTitle>Wanna talk about work? opportunity? collaboration? or life?</SubTitle>
                <EmailButton href="" target="_blank">
                    Say hello!
                </EmailButton>
            </Wrapper>

            <Footer>
                <FooterLine>Made of earth with</FooterLine>
                <FooterHeart>
                    <Image width={25} height={25} quality={50} src={heart} alt="heart" />
                </FooterHeart>
            </Footer>
        </Section>
    );
}

export default Contact;

const Section = styled.section`
    width : 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3vh 0;

    @media ${device.mobileL} {
        min-height: 80vh;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    @media ${device.tabletL} {
        font-size: 12.5vh;
    }
    @media ${device.tabletS} {
        font-size: 10.5vh;
    }
    @media ${device.mobileL} {
        font-size: 9.5vh;
    }
    @media ${device.mobileM} {
        font-size: 8vh;
    }
    @media ${device.mobileS} {
        font-size: 7vh;
    }
`

const SubTitle = styled.p`
    font-size: 2.8vh;
    margin-top: 0;

    @media ${device.tabletM}{
        font-size: 2.5vh;
        margin-top: -2vh;
        width: 85%;
        text-align: center;
    }

    @media ${device.mobileL} {
        font-size: 1.9vh;
        margin-top: -4vh;
    }
    @media ${device.mobileM} {
        font-size: 1.6vh;
        margin-top: -6vh;
    }
`

const EmailButton = styled.a`
    font-weight: 700;
    font-size: 5vh;
    margin-top: 10vh;

    @media ${device.mobileL} {
        margin-top: 15vh;
    }
    @media ${device.mobileM} {
        font-size: 4vh;
        margin-top: 10vh;
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
`

const FooterLine = styled.p`
    font-size: 2.8vh;

    @media ${device.mobileL} {
        font-size: 2vh;
    }
   
`

const FooterHeart = styled.div`
    padding-left: 5px;
    padding-top: 5px;

    
    
`
