import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  width: 100%;
  height: calc(100vh );
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.soft};
  padding: 1rem;
  position: relative;


  @media (max-width: 768px) {
    height: max-content;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Text = styled.p`
  width: fit-content;
  padding: 2rem 10rem;
  font-family: ${({ theme }) => theme.fonts.quaternary};
  font-size: 1.5rem;
  position: relative;
  line-height: 2rem;
  text-align: justify;

  @media (max-width: 1200px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 900px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;
  }
`;

const BackgroundText = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: rgba(187, 79, 17, 0.384);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  pointer-events: none;
  font-size: 15vw;

  @media (max-width: 1200px) {
    font-size: 20vw;
  }

  @media (max-width: 900px) {
    font-size: 25vw;
  }

  @media (max-width: 600px) {
    font-size: 30vw;
  }

  @media (max-width: 450px) {
    font-size: 35vw;
  }
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.soft};
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.soft};

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Content>
        <Name>Fardeen Zafar</Name>
        <Text>
          Welcome to my portfolio, where storytelling comes alive through the lens. I am FARDEEN ZAFAR, a passionate filmmaker dedicated to crafting compelling narratives that resonate deeply with audiences. With a keen eye for detail and a commitment to excellence, I invite you to explore a collection of my works that span (Advertisment, Music videos, Short films), each crafted with creativity, vision, and a drive to evoke emotion and provoke thought. From short films to music videos, every project showcases my dedication to the art of visual storytelling. Join me on this journey through the power of cinema.
        </Text>
        <BackgroundText>FZK</BackgroundText>
      </Content>
    </PortfolioContainer>
  );
};

export default Portfolio;
