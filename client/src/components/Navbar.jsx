import React from 'react'
import styled from 'styled-components'
import { FlexRow } from '../styles/GlobalStyle'

const NavContainer = styled.div`
  width: 100%;
  /* height: 3rem; */
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
`
const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  /* border-radius: 50%; */
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
`
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  padding:.5rem 1rem ;
`
const ListItems = styled.li`
  list-style: none;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  transition: color .3s;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: width .3s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
    

    &::after {
      width: 100%;
    }
  }

  
`
const Navbar = () => {
  return (
    <>
      <NavContainer>
        <FlexRow>
          <Logo src="https://avatars.githubusercontent.com/u/665651?v=5" />
          <NavList>
            <ListItems>Home</ListItems>
            <ListItems>Portfolio</ListItems>
            <ListItems>About</ListItems>
            <ListItems>Contact</ListItems>
          </NavList>
        </FlexRow>
      </NavContainer>
    </>
  )
}

export default Navbar