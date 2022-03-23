import Image from 'next/image';
import styled from 'styled-components';
import arrowIcon from '../public/assets/images/arrow.png';

const TechStackList = (props) => {
    return (
        <Wrapper>
            <Image src={arrowIcon} alt={"arrow"} width={20} height={20} />
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
`