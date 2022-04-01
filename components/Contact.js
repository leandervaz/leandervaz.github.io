import Image from "next/image";
import styled from "styled-components";
import heart from "../public/assets/images/heart.png";

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
`

const SubTitle = styled.p`
    font-size: 2.8vh;
    margin-top: 0;
`

const EmailButton = styled.a`
    font-weight: 700;
    font-size: 5vh;
    margin-top: 5vh;
`

const Footer = styled.div`
    display: flex;
    align-items: center;
`

const FooterLine = styled.p`
    font-size: 2.8vh;
`

const FooterHeart = styled.div`
    padding-left: 5px;
    padding-top: 5px;
`
