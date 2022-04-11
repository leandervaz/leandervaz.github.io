import dynamic from 'next/dynamic';
import Image from 'next/image';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import SampleIMG from '../public/assets/images/heart.png';



// import { arrowsPlugin } from "@brainhubeu/react-carousel";

const ClubsCommunities = () => {
    return (
        <Section1>
            <Section2>
                <Div1>
                    <InnerDiv1>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                    </InnerDiv1>
                </Div1>
                <Div2>
                <InnerDiv2>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                        <ImageDiv>
                            <Image width={100} height={100} src={SampleIMG} alt={"Heart"}/>
                        </ImageDiv>
                    </InnerDiv2>
                </Div2>
            </Section2>
        </Section1>
    );
}

export default ClubsCommunities;

const animationCustom = keyframes`
0%    { left: 0; }
  100%  { left: -200%; }
`

const Section1 = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;

    
    position: relative;
    overflow: hidden;
`

const Section2 = styled.div`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    /* -webkit-animation: slide 80s linear infinite;
    animation: slide 80s linear infinite; */
    animation: slideshow 10s linear infinite;
    animation-name: ${animationCustom};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    
`

const Div1 = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 300%;
`

const Div2 = styled.div``

const InnerDiv1 = styled.div`
    white-space: nowrap;
    overflow: hidden;
`

const InnerDiv2 = styled.div``

const ImageDiv = styled.div`
    display: inline-block;
    padding: 0 2.2rem;
    vertical-align: middle;
    outline: none;
    cursor: default;
`

