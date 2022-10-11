import React from 'react';
import styled from 'styled-components';

const ParagraphStyle = styled.p`
    grid-area: info;
    font-family: 'Century Gothic';
    color: white;
    font-weight: normal;
    font-size: 25px;
    padding: 0 50px;
`;

const Paragraph = ( props : {text: string} ) => {
    return <ParagraphStyle dangerouslySetInnerHTML={{__html: props.text}}/>;
};

export default Paragraph;