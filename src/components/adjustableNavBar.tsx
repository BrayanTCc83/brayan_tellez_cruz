import React from 'react';
import styled from 'styled-components';
import { IExpandibleComponent } from '../models/interfaces/components';
import { Link } from 'react-router-dom';

type AdjustableNavBarProps = IExpandibleComponent & {children: Array<JSX.Element>, selectedView:number, onChange:(index:number)=>void };

const AdjustableNavBarStyle = styled.nav.attrs( (props:AdjustableNavBarProps) => props )`
    display: flex;
    width: 100%;
    grid-area: navbar;
    top: 70vh;
    left: 40%;
    justify-content: space-evenly;
    align-items: flex-end;
    transition: top 0.5s, left 0.5s;
    ${ props => !props.isExpanded ? `
        top: 1vh;
        left: 850px;
    ` : '' }
    a {
        text-decoration: none;
        &:nth-of-type(${props => props.selectedView ? props.selectedView : 0}) {
            button {
                background-color: #35D9B8;
                color: #232323;
            }
        }
    }
`;

const AdjustableNavBar = ( props : AdjustableNavBarProps ) : JSX.Element => {
    return (
        <AdjustableNavBarStyle {...props}>
            {
                props.children ? 
                    props.children.map( (element, index) => <a href={'/#'+(index+1)} onClick={ () => 
                        props.onChange(index+1) 
                    } >{React.cloneElement(element, {index: index+1})}</a>):null
            }
        </AdjustableNavBarStyle>
    )
};

export default AdjustableNavBar;