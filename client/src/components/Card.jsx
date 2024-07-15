import React from 'react'
import styled from 'styled-components'
const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.primary};

    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const CardTitle = styled.div`
    
`
const CardImage = styled.div`
    /* width: 100%;
    height: 50%; */
    size: 800px 300px;

    background: url(${({ src }) => src});
    object-fit: cover;
`

const CardDescription = styled.div`
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.tertiary};

    padding: 0.5rem;

    text-align: center;
`

const Card = (props) => {
    return (
        <>
            <CardContainer>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardImage src={props.image} />
                <CardDescription>
                    {props.description}
                </CardDescription>
            </CardContainer>
        </>
    )
}

export default Card