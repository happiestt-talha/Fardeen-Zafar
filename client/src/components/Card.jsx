import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 42vmin;
    height: 50vmin;
    background-color: ${({ theme }) => theme.colors.tertiary};
    padding: 0.2rem;
    border-radius: 1.2rem;

    @media (max-width: 768px) {
        width: 89vmin;
        height: 90vmin;
    }
`

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.soft};
`

const CardTitle = styled.h2`
    font-size: 2vmin;
    margin: 0 0 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem 1rem 0 0;
    text-align: center;
    backdrop-filter: brightness(0.4);
`

const CardImage = styled.div`
    width: 100%;
    height: 60%;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
    border-radius: 1rem 1rem 0 0;
`

const CardDescription = styled.div`
    font-size: 1.5vmin;
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 0.5rem;
    text-align: center;
`

const Card = (props) => {
    return (
        <CardContainer>
            <CardContent>
                <CardImage image={props.image}>
                    <CardTitle>
                        {props.title}
                    </CardTitle>
                </CardImage>
                <CardDescription>
                    {props.description}
                </CardDescription>
            </CardContent>
        </CardContainer>
    )
}

export default Card
