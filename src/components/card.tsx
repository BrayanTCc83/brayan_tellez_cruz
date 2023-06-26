import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    position: relative;
    width: 250px;
    height: 350px;
    background-color: white;
    border-radius: 15px;
    display: grid;
    grid-template: 50px 1px calc(100% - 102px) 1px 50px / 100%;
    grid-template-areas: 
        'title'
        'sep'
        'content'
        'sep2'
        'footer';
    overflow: hidden;
    &::before {
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        content: 'Ver detalles';
        color: transparent;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #0000000;
        transition: background-color 0.3s;
        cursor: pointer;
    }
    &:hover::before {
        font-weight: bold;
        color: black;
        background-color: #35d9b8be;
    }
`;

const CardTitle = styled.h4`
    margin: auto;
    height: auto;
    grid-area: title;
`;

const CardSeparator = styled.hr`
    border: 1px solid black;
    width: 100%;
    margin: 0;
    grid-area: sep;
`;

const CardText = styled.p`
    margin: auto;
    grid-area: content;
`;

const CardFooter = styled.footer`
    margin: auto;
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    grid-area: footer;
`;

const Card = () => {
    return (
        <CardStyle>
            <CardTitle>This is the title</CardTitle>
            <CardSeparator/>
            <CardText>Hola, este es una carta</CardText>
            <CardFooter>$100</CardFooter>
        </CardStyle>
    );
};

const CardsContainer = styled.section`
    grid-area: content;
    display: flex;
    gap: 15px;
`;

export {
    CardsContainer
};

export default Card;