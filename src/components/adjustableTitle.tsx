import React from 'react';
import styled from 'styled-components';
import { IExpandibleComponent } from '../models/interfaces/components'

type AdjustableTitleProps = React.PropsWithChildren & IExpandibleComponent;

const AdjustableContent = styled.h1.attrs( ( props: AdjustableTitleProps ) => {
    return {
        isExpanded : props.isExpanded,
        maxWidth : props.maxWidth
    }
} )`
    position: relative;
    font-family: 'Century Gothic';
    font-weight: normal;
    font-size: 4em;
    color: #35D9B8;
    left: 0;
    transition: font-size 0.5s, top 0.5s, left 0.5s;
    grid-area: title;
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        top: 110%;
        left: 0;
        background-color: #35D9B8;
        transform: rotate(0);
        transition: top 0.5s, left 0.5s;
    }
    ${ props => !props.isExpanded ? `
        font-size: 32px;
        &::after{
            width: 1em;
            left: 100%;
            top: 0.5em;
            transform: rotate(90deg);
        }
    `: '' }
`

const AdjustableTitle = ( props : AdjustableTitleProps ) : JSX.Element => {
    return (
        <AdjustableContent {...props} />
    )
};

export const Title = ( props: React.PropsWithChildren ) : JSX.Element => {
    return <AdjustableContent isExpanded={true} {...props} />
}

export default AdjustableTitle;