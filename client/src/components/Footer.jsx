import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  /* color: ${({ theme }) => theme.colors.primary}; */
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
`
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <p>Created by DEVED with love <span role="img" style={{ fontSize: '2rem', color: 'red' }}>&hearts;</span> </p>
      </FooterContainer>
    </>
  )
}

export default Footer