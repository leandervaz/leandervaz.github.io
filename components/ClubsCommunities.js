import Image from 'next/image';
import styled from 'styled-components';
import Carousel from "nuka-carousel";
import { device } from '../styles/responsive';

import GDSC from '../public/assets/images/logos/googledsc.png';
import GCE from '../public/assets/images/logos/github.svg'
import MLSA from '../public/assets/images//logos/microsoft.png';
import HackClub from '../public/assets/images/logos/hackclub.svg';
import Mozilla from '../public/assets/images/logos/mozilla.svg';
import SOSC from '../public/assets/images/logos/sosc.svg';
import CodeZoned from '../public/assets/images/logos/codezoned.png';
import CodeChef from '../public/assets/images/logos/codechef.png';
import Link from 'next/link';

const ClubsCommunities = () => {
    return (
        <Section>
            <Wrapper>
                <Title>Clubs</Title>
                <SubTitle>Open Source clubs and communities</SubTitle>
                <Slider>
                    <Carousel
                    // animation='zoom'
                    autoplay='true'
                    autoplayInterval={1500}
                    cellAlign='center'
                    // cellSpacing={3}
                    dragging='true'
                    pauseOnHover='true'
                    wrapAround={true}
                    slidesToShow={4}
                    disableEdgeSwiping={true}
                    // scrollMode='remainder'
                    speed={1500}

                    >
                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={300} height={300} src={GCE} alt={"GitHub Campus Expert"}/>
                                </ImageDiv>
                            </a>
                        </Link>

                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={350} height={300} src={GDSC} alt={"Google Developer Student Club"}/>
                                </ImageDiv>
                            </a>
                        </Link>

                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={300} height={300} src={MLSA} alt={"Microsoft learn student ambassador"}/>
                                </ImageDiv>
                            </a>
                        </Link>

                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={300} height={300} src={HackClub} alt={"Hack Club"}/>
                                </ImageDiv>
                            </a>
                        </Link>

                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={300} height={300} src={Mozilla} alt={"Mozilla Club"}/>
                                </ImageDiv>
                            </a>
                        </Link>

                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={250} height={300} src={SOSC} alt={"Sahyadri Open Source Community"}/>
                                </ImageDiv>
                            </a>
                        </Link>

                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={300} height={300} src={CodeChef} alt={"CodeChef"}/>
                                </ImageDiv>
                            </a>
                        </Link>


                        <Link href='https://cloud.google.com' >
                            <a target={"_blank"}>
                                <ImageDiv>
                                    <Image width={300} height={300} src={CodeZoned} alt={"CodeZoned"}/>
                                </ImageDiv>
                            </a>
                        </Link>

                    </Carousel>
                </Slider>
            </Wrapper>

        </Section>
    );
}

export default ClubsCommunities;



const Section = styled.div`
    width: 100%;
    min-height: 50vh;
    display: table;

    .slider-control-centerleft{
        display: none;
    }
    .slider-control-centerright{
        display: none;
    }
    .slider-control-bottomcenter{
        display: none;
    }

    @media ${device.mobileM}{
        min-height: 0;
    }


`


const Wrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align:center
`

const Slider = styled.div`
    width: 80%;
    margin: 15vh auto;

    @media ${device.tabletS}{
        width: 90%;
        margin: 10vh auto;
    }
    @media ${device.mobileM}{
        margin: 5vh auto;
    }

`

const ImageDiv = styled.div`
    width: 40%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img{
        filter: grayscale(90%);
        -webkit-filter: grayscale(90%);
        -webkit-transition: all .5s ease-in-out;


        &:hover{
            cursor: pointer;
            filter: none;
            -webkit-filter: grayscale(0);
        }
    }

    @media ${device.tabletS}{
        width: 50%;
    }
    @media ${device.mobileL}{
        width: 70%;
    }
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


