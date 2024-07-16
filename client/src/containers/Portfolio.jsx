import React from 'react'
import styled from 'styled-components'
const PortfolioContainer = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.soft};
  padding: 1rem;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

`
const Text = styled.p`
  width: fit-content;
  padding: 2rem 15rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.3rem;
  /* background-color: rgba(240, 248, 255, 0.205); */
  position: relative;

  &::after{
    content: 'ZFK';
    position: absolute;
    left: 25rem;
    top: 1rem;

    font-family:${({ theme }) => theme.fonts.secondary};
    font-size: 15rem;
    color:rgba(187, 79, 17, 0.384);
  }

  @media (max-width:450px){
    padding:2rem 1rem;

    &::after{
      left:0;
      top: 3rem;
    }
  }
`
const Portfolio = () => {
  return (
    <>
      <PortfolioContainer>
        <Content>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo corrupti quos illo illum nulla. Recusandae, mollitia molestiae. In quidem libero natus, commodi iste debitis. Aperiam et modi explicabo, eveniet illo rem error nulla mollitia cupiditate ex officia enim dicta? Corrupti quos fugiat sapiente. Cum deserunt aspernatur quam perferendis quaerat?
          </Text>
        </Content>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio