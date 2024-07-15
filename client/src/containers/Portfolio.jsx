import React from 'react'
import styled from 'styled-components'
const PortfolioContainer = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer>

        <h1>Portfolio</h1>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio