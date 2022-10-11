import React from 'react';
import styled from 'styled-components';
import { IExpandibleComponent } from '../models/interfaces/components'

type AdjustableSubtitleProps = React.PropsWithChildren & IExpandibleComponent;

const AdjustableContent = styled.h2.attrs( ( props: AdjustableSubtitleProps ) => {
    return {
        isExpanded : props.isExpanded,
        maxWidth : props.maxWidth
    }
} )`
    font-family: 'Century Gothic';
    color: white;
    font-weight: normal;
    font-size: 3em;
    transition: font-size 0.5s, top 0.5s, left 0.5s;
    grid-area: subtitle;
    ${ props => !props.isExpanded ? `
        font-size: 30px;
        top: -1vh;
        left: 500px;
    `: '' }
`;

const AdjustableSubtitle = ( props : AdjustableSubtitleProps ) : JSX.Element => {
    return (
        <AdjustableContent {...props} />
    )
};

export const Subtitle = ( props : React.PropsWithChildren ) : JSX.Element => {
    return <AdjustableContent isExpanded={true} {...props} />
} 

export default AdjustableSubtitle;