import React from 'react'
import styled from 'styled-components'
import { FlexRow } from '../styles/GlobalStyle'

const NavContainer = styled.div`
  width: 100vw;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`
const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  /* border-radius: 50%; */
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);

`
const Navbar = () => {
  return (
    <>
      <NavContainer>
        <FlexRow>
          <Logo src="https://avatars.githubusercontent.com/u/66475651?v=5" />
          <h1>Fardeen Portfolio</h1>
        </FlexRow>
      </NavContainer>
    </>
  )
}

export default Navbar