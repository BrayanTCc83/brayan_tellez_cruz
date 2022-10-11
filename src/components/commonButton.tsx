import React from 'react';
import styled from 'styled-components';

type CommonButtonProps = React.PropsWithChildren & {
    onClick ?: (index:number) => void,
    index?: number
};

const CommonButtonStyle = styled.button`
    display: block;
    height: 2em;
    width: 160px;
    font-size: 1.2em;
    padding: 5px;
    background-color: #232323;
    border: #35D9B8 2px solid;
    color: #35D9B8;
    border-radius: 1em;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    &:hover{
        background-color: #35D9B8;
        color: #232323;
    }
`;

const CommonButton = ( props : CommonButtonProps ) : JSX.Element => {
    return (
        <CommonButtonStyle onClick={ ()=>{
            props.onClick ?  props.onClick(props.index?props.index:0) : console.log()
        } } >{props.children}</CommonButtonStyle>
    );
};

export default CommonButton;