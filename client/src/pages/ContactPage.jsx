import React from 'react'
import ContactCard from '../components/ContactCard'
import styled from 'styled-components'

const ContactContainer = styled.div`
    height: calc(100vh - 11.5rem);

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    background: url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

`
const ContactPage = () => {
    return (
        <>
            <ContactContainer>
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </ContactContainer>
        </>
    )
}

export default ContactPage