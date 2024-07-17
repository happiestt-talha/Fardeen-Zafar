import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.soft};
  padding: 1rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Text = styled.p`
  width: fit-content;
  padding: 2rem 10rem;
  font-family: ${({ theme }) => theme.fonts.quaternary};
    /* text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.soft}; */

  font-size: 1.5rem;
  position: relative;
  line-height: 2rem;
  text-align: justify;

  &::after {
    content: 'FZK';
    position: absolute;
    left: 25rem;
    top:8rem;

    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 15rem;
    color: rgba(187, 79, 17, 0.384);
  }

  @media (max-width: 1200px) {
    padding: 2rem 10rem;

    &::after {
      left: 15rem;
      font-size: 10rem;
    }
  }

  @media (max-width: 900px) {
    padding: 2rem 5rem;

    &::after {
      left: 10rem;
      font-size: 8rem;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 2rem;

    &::after {
      left: 5rem;
      font-size: 5rem;
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;

    &::after {
      left: 0;
      top: 3rem;
      font-size: 3rem;
    }
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
  `
const Portfolio = () => {
  return (
    <>
      <PortfolioContainer>
        <Content>
          <Name>Fardeen Khan</Name>
          <Text>Welcome to my portfolio, where storytelling comes alive through the lens. I am FARDEEN ZAFAR, a passionate filmmaker dedicated to crafting compelling narratives that resonate deeply with audiences. With a keen eye for detail and a commitment to excellence, I invite you to explore a collection of my works that span (Advertisment, Music videos, Short films), each crafted with creativity, vision, and a drive to evoke emotion and provoke thought. From short films to music videos, every project showcases my dedication to the art of visual storytelling. Join me on this journey through the power of cinema.
          </Text>
        </Content>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
