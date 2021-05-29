import React, { Component } from 'react'

import {
    Container,
    Button,
    CardDeck,
    Card
} from 'react-bootstrap';

import logo from '../images/logo.png';

import Vadim from '../images/footer/Vadim.png';
import Alesya from '../images/footer/Alesya.png';

import { useTranslation } from "react-i18next";

export default function Developers() {
    const { t, i18n } = useTranslation();
    return (
        <Container>
            <h2 className='titles'>{t("team-title")}</h2>
            <CardDeck className='d-flex justify-content-center mb-5'>
                <Card className='developers__card' bg='dark'>
                    <Card.Img
                        className='developers__photo'
                        src={Vadim}
                        alt="Vadim"
                    />
                    <Card.Body>
                        <a className='developers__link' href='https://github.com/ApelsinU' title='Открыть профиль в Github' target='blank'>
                            <Card.Title>ApelsinU</Card.Title>
                            <Card.Text>{t("team-Vadim")}</Card.Text>
                            <i class="developers__icon fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
                <Card className='developers__card' bg='dark'>
                    <Card.Img
                        className='developers__photo'
                        src={Alesya}
                        alt="Vadim"
                    />
                    <Card.Body>
                        <a className='developers__link' href='https://github.com/suprugafad' title='Открыть профиль в Github' target='blank'>
                            <Card.Title>Alexandrina</Card.Title>
                            <Card.Text>{t("team-Alesya")}</Card.Text>
                            <i class="developers__icon developers__icon--light fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    )
}


