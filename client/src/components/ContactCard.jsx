import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactCard = () => {
    return (
        <>
            <CardContainer>
                <h1>Contact Card</h1>
            </CardContainer>
        </>
    )
}

export default ContactCard