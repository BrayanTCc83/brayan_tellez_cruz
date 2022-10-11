import React from 'react';
import styled from 'styled-components';
import Paragraph from './paragraph';
import Subtitle2 from './subtitle2';

const ImageContainer = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        img{
            max-width: 450px;
            max-height: 450px;
        }
        div{
            display: block;
        }
    }
`

const ImageStyle = styled.img`
    position: relative;
    max-width: 400px;
    max-height: 400px;
    border-radius: 20px;
    margin: 0;
    box-shadow: 0px 2px 5px #35D9B8;
    transition: max-width 0.3s, max-height 0.3s;
`

const TextHover = styled.div`
    position: absolute;
    background-color: #1f1f1f8c;
    color: white;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: none;
`

const ImageViewer = ( props : {src: string, data?:string} ) : JSX.Element => {
    return (
        <ImageContainer>
            <ImageStyle {...props} ></ImageStyle>
            {
                props.data?<TextHover><Paragraph text={props.data} ></Paragraph></TextHover>:<></>
            }
        </ImageContainer>
    );
};

export default ImageViewer;