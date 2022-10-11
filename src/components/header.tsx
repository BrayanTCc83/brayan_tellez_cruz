import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { IExpandibleComponent } from "../models/interfaces/components";

export const ExpansibleHeader = styled.header.attrs( ( props : IExpandibleComponent ) => {
    return ( {...props} )
} )`
    z-index: 2;
    position: sticky;
    display: grid ;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color : #232323;
    color: white;
    transition: height 0.5s;
    grid-template: repeat(8, 12.5%)/ 10vw 30vw 5vw 45vw 10vw;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-areas: 
        ". . . . ."
        ". . . title ."
        ". image . subtitle ."
        ". image . icon ."
        ". image . icon ."
        ". image . navbar ."
        ". . . . ."  
    ;
    ${ props => !props.isExpanded ? `
        height: 6vh;
        grid-gap: 1%;
        grid-template: 10% 80% 10%/ 5% 300px 300px 5% calc(90% - 600px) 5%;
        grid-template-areas: 
            ". . . . . ."
            ". title subtitle . navbar ."
            ". . . . . ."  
        ;
    ` : '' }
`
type HeaderProps = React.PropsWithChildren & IExpandibleComponent;

const Header = ( props : HeaderProps ) : JSX.Element => {
    return (
        <ExpansibleHeader {...props} />
    );
}

export default Header;