import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
const CardContainer = styled.div`
    width: 20rem;
    height: 20rem;
    border: 2px solid #ccc;
    border-radius: 1.2rem;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.9s;

    &:hover {
    transform: rotateY(180deg);
    }
`;

const Face = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    border-radius: 1.2rem;
    backdrop-filter: blur(25px); /* Apply the blur effect */
    -webkit-backdrop-filter: blur(25px); /* For Safari support */
`;

const FrontFace = styled(Face)`
    color: #000;
`;

const BackFace = styled(Face)`
    color: #000;
    transform: rotateY(180deg);
    /* background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) ; */
`;

const FrontIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
`
const BackIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 3rem;

    background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) ;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`
const ContactCard = (props) => {
    return (
        <CardContainer>
            <FrontFace>
                <Link to='https://www.linkedin.com/in/fardeen-zafar/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FrontIcon>{props.Ficon}</FrontIcon>
                </Link>
            </FrontFace>
            <BackFace>
                <Link to='https://www.linkedin.com/in/fardeen-zafar/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <BackIcon>
                        <p>
                            {props.Bicon}
                        </p>
                        
                    </BackIcon>
                </Link>
            </BackFace>
        </CardContainer>
    );
};

export default ContactCard;
