import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 20rem;
  height: 20rem;
  border: 2px solid #ccc;
  border-radius: 1.2rem;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s;

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
  /* background-color: rgba(255, 255, 255, 0.8);  */
  color: #000;
`;

const BackFace = styled(Face)`
  /* background-color: rgba(141, 192, 237, 0.8);  */
  color: #000;
  transform: rotateY(180deg);
`;

const ContactCard = () => {
  return (
    <CardContainer>
      <FrontFace>
        <Link to='https://www.linkedin.com/in/fardeen-zafar/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Front Face</h1>
        </Link>
      </FrontFace>
      <BackFace>
        <Link to='https://www.linkedin.com/in/fardeen-zafar/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Back Face</h1>
        </Link>
      </BackFace>
    </CardContainer>
  );
};

export default ContactCard;
