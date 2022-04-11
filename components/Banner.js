import styled from "styled-components";
import { device } from "../styles/responsive";

const Banner = () => {
    return (
        <Section>
            <Text>
                This website is under construction; Stalk at your own risk ;)
            </Text>
        </Section>
    );
}

export default Banner;

const Section = styled.section`
    width: 100%;
    background: #000000;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Text = styled.p`
    color: #ffffff;
    margin: 0;
    padding: 3vh 0;
    font-size: 3vh;
    line-height: 4.5vh;
    word-spacing: 10px;
    text-align: center;

    @media ${device.mobileL} {
        font-size: 2vh;
    }
    @media ${device.mobileM} {
        font-size: 1.7vh;
        line-height: 3vh;
    }
`