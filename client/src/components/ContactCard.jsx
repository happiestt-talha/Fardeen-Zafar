import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FrontFace = styled.div`

`
const BackFace = styled.div`
    
`
const ContactCard = () => {
    return (
        <>
            <CardContainer>
                <Link to='https://www.linkedin.com/in/fardeen-zafar/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FrontFace>
                        <h1>Front Face</h1>
                    </FrontFace>

                    <BackFace>
                        <h1>Back Face</h1>
                    </BackFace>
                </Link>
            </CardContainer>
        </>
    )
}

export default ContactCard