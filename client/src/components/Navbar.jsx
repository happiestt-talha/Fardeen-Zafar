import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
  width: 100%;
  /* height: 5rem; */
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  padding:.5rem 1rem ;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  transition: all .5s;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: width .5s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.light};
    transform: scale(1.2);

    &::after {
      width: 100%;
    }
  }

  
`
const Name = styled.div`
  padding: 0 1rem;
  max-width: min-content;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 0px 0px 6px ${({ theme }) => theme.colors.secondary};
  /* margin-inline-start: 33rem; */

  overflow: hidden;
  white-space: nowrap;  
  
  /* border-right: 2px solid ${({ theme }) => theme.colors.tertiary}; */
  /* animation: typing 4s steps(20,end) 6s 1 normal forwards; */

  @keyframes typing {
    from { width: 0 }
    to { width: 43% }
  }

  @media screen and (max-width: 768px) {
    margin-inline: auto;
  }
`
const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Name>Portfolio</Name>
        <NavList>
          <ListItems><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></ListItems>
          <ListItems><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></ListItems>
          <ListItems><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></ListItems>
        </NavList>
      </NavContainer>
    </>
  )
}

export default Navbar