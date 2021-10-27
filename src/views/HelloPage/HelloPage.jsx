import React from 'react';
import { H1, Container, Img } from './HelloPage.steled.jsx'
import mainIMG from '../../images/phonebook2.png'

export default function HelloPage() {
  
    return (
        <Container>
            <H1>Phone Book App</H1>
            <Img src={mainIMG} alt='Phone Book' width='500px'></Img>
        </Container>
    )
}
