import Image from 'next/image';
import styled from 'styled-components';
import notFoundImage from '../public/assets/images/404.png';
const NotFound = () => {
    return (
        <Section>
            <Wrapper>
                <NotFoundImage>
                    <Image priority={true} layout={'responsive'} width={30} height={20} src={notFoundImage} alt={"404"} />
                </NotFoundImage>
                <NotFoundText>
                    The page you were looking is nowhere to be found. Come back in a while, or few hours, or days,or months, or never.
                </NotFoundText>
            </Wrapper>
        </Section>
        
    );
}

export default NotFound;

const Section = styled.section`
    width : 100%;
    margin: 0;
    min-height: 100vh;
    display: table;
`

const Wrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align:center
`

const NotFoundImage = styled.div`
    filter: drop-shadow(10px 14px 12px rgba(0,0,0,.5));
    width: 60%;
    margin: 0 auto;
`

const NotFoundText = styled.p`
    font-size: 2.2vh;
    width: 50%;
    margin: 0 auto;
`