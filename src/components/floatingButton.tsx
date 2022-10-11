import React from 'react';
import styled from 'styled-components';
import { ArrowFunction } from 'typescript';
import { IExpandibleComponent } from '../models/interfaces/components';

type FloatingButtonProps =  React.PropsWithChildren & IExpandibleComponent & { onClick : () => void }

const FloatingButtonStyle = styled.button.attrs( (props : FloatingButtonProps) => props )`
    position: absolute;
    display: block;
    top: calc( 100% - 100px );
    left: calc(50% - 35px);
    border-radius: 100%;
    width: 70px;
    height: 70px;
    background-color: #232323;
    border: #35D9B8 2px solid;
    color: #35D9B8;
    cursor: pointer;
    z-index: 3;
    transition: background-color 0.3s, color 0.3s, top 0.5s;
    &:hover{
        background-color: #35D9B8;
        color: #232323;
    }
    ${ props => !props.isExpanded ? `
        position: relative;
        left: calc(50% - 35px);
        margin: 10px 0;
        top: 0;
        z-index: 1;
    ` : '' }
`;

const FloatingButton = ( props: FloatingButtonProps ) : JSX.Element => {
    return (
        <FloatingButtonStyle {...props} />
    )
};

export default FloatingButton;