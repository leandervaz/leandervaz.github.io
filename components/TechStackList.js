import Image from 'next/image';
import styled from 'styled-components';
import arrowIcon from '../public/assets/images/arrow.png';
import { device } from '../styles/responsive';

const TechStackList = (props) => {
    return (
        <Wrapper>
            <Image quality={50} src={arrowIcon} alt={"arrow"} width={13} height={13} />
            <ListText>{props.text}</ListText>
        </Wrapper>
    );
}

export default TechStackList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ListText = styled.p`
    margin: 8px 5px;
    font-size: 2.2vh;

    @media ${device.mobileM}{
        font-size: 1.8vh;
    }
`