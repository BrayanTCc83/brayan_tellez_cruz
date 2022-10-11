import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ImageViewer from './imageViewer';

const LEFT = 1;
const RIGHT = 2;
type DIRECTION = typeof LEFT | typeof RIGHT;

function useTimedBoolean( time:number ) : [ state:boolean, startTiming : ( callback ?: ()=>void ) => void ] {
    const [ state, setState ] = useState<boolean>(false);

    const startTiming = ( callback ?: ()=>void ) => {
        setState(true)
        let timer = setTimeout( () => {
            setState(false);
            callback? callback() : console.log('')
        }, time );
    };

    return [state, startTiming];
}

function usePreState<T>( initial : T ) : [ T, T, (newState:T)=>void ]{
    const [ current, setCurrent ] = useState<T>(initial);
    const [ last, setLast ] = useState<T>(initial);

    const setIndex = ( newState : T ) => {
        setLast(current);
        setCurrent( newState );
    };

    return [ last, current, setIndex ];
}

const ReelStyle = styled.div.attrs( (props:{lastIndex:number, currentIndex:number, imageCount: number, direction: DIRECTION, animationActive: boolean}) => props )`
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: column;
    grid-auto-columns: 450px;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 550px;
    overflow: hidden;
    padding: 0 60px;
    box-sizing: border-box;
    button {
        position: absolute;
        height: 100px;
        width: 40px;
        font-size: 30px;
        font-family: 'Century Gothic';
        font-weight: bold;
        border-radius: 10px;
        color: #35D9B8;
        border: 2px solid #35D9B8;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover{
            background-color: #0000005d;
        }
    }
    &> div{
        position: relative;
        align-self: center;
        margin: auto;
        ${ props => props.animationActive ? props.direction === RIGHT ? `animation: RightAnimation 1s 1;` : `animation: LeftAnimation 1s 1;` : '' }
    }
    & button:first-child{
        left: 10px;
        z-index: 2;
    }
    & button:last-child{
        left: calc(100vw - 60px);
        z-index: 2;
    }
    @keyframes LeftAnimation{
        0% {
            left : 0%;
        }
        100% {
            left : 460px;
        }
    }
    @keyframes RightAnimation{
        0% {
            left : 0%;
        }
        100% {
            left : -460px;
        }
    }
`;

const Reel = ( props: { contents : Array<{src:string,data?:string}> } ) : JSX.Element => {
    const [ images, setImages ] = useState<Array<{src:string,data?:string}>>(props.contents);
    const [ lastIndex, currentIndex, setIndex] = usePreState<number>(1);
    const [ direction, setDirection ] = useState<DIRECTION>(LEFT);
    const [ isActiveAnimation, startTimer ] = useTimedBoolean(1000);

    const changeElementFocus = ( direction: DIRECTION ) => {
        setDirection(direction);
        switch(direction){
            case LEFT:
                if(currentIndex > 1)
                    setIndex(currentIndex-1);
                else
                    setIndex(images.length);
                break;
            case RIGHT:
                if(currentIndex < images.length)
                    setIndex(currentIndex+1);
                else
                    setIndex(1);
                break;
        }
        startTimer( ()=>{
            if(direction === LEFT)
                setImages( old => [ old[old.length-1], ...old.splice(0, old.length-1) ] );
            else
                setImages( old => [ ...old.slice(1), old[0] ] );
        } );
    };

    return (
        <ReelStyle currentIndex={currentIndex} lastIndex={lastIndex} imageCount={images.length} direction={direction} animationActive={isActiveAnimation} >
            <button disabled={isActiveAnimation} onClick={()=>changeElementFocus(LEFT)} >{'<'}</button>
            {
                images.slice(images.length-2).map( image => <ImageViewer {...image} /> )
            }
            {
                images.slice(0, images.length-2).map( image => <ImageViewer {...image} /> )
            }
            <button disabled={isActiveAnimation} onClick={()=>changeElementFocus(RIGHT)} >{'>'}</button>
        </ReelStyle>
    );
};

export default Reel;