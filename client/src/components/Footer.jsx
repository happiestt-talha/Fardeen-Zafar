import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  /* height: 3rem; */
  background-color: ${({ theme }) => theme.colors.tertiary};
  /* color: ${({ theme }) => theme.colors.primary}; */
  color: white;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;

`

const HeartPara = styled.p`
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  gap: 0.5rem;

  a{
    line-height: 1.5rem;
    text-decoration: underline;
    color: inherit;
  }
  &:hover :last-child{
    color: rgb(254, 242, 227);
    transform: scale(1.5);
  }
`

const Heart=styled.p`
  color: black;
  cursor: pointer;
  transition: all .5s;
`
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <HeartPara>Created by <a href='https://www.linkedin.com/in/mt4lha' target='_blank' rel='noreferrer'>DEVED</a><Heart>&hearts;</Heart> </HeartPara>
      </FooterContainer>
    </>
  )
}

export default Footer