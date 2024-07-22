import React from 'react'
import ContactCard from '../components/ContactCard'
import styled from 'styled-components'
import contactBg from '../assets/images/contact-bg.jpg'
import { FaInstagram, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const ContactContainer = styled.div`
    height: calc(100vh - 11.5rem);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    /* background: url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); */

    background-image: url(${contactBg});
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        flex-direction: column;
        height: max-content;
    }
`

const ContactPage = () => {
    const data = [
        {
            id: 1,
            Ficon: <FaInstagramSquare />,
            Bicon: 'Card 1'
        },
        {
            id: 2,
            Ficon: <FaTwitterSquare />,
            Bicon: 'Card 2'
        },
        {
            id: 3,
            Ficon: <FaLinkedinIn />,
            Bicon: 'Card 3'
        }
    ]
    return (
        <>
            <ContactContainer>
                {
                    data.map((item) => {
                        return <ContactCard
                            key={item.id}
                            Ficon={item.Ficon}
                            Bicon={item.Bicon}
                        />
                    })
                }
            </ContactContainer>
        </>
    )
}

export default ContactPage