import React from 'react';
import styled from 'styled-components';
import { IExpandibleComponent } from '../models/interfaces/components';

type IconProps = IExpandibleComponent & {
    color?: string;
};

const COLOR_DEFAULT = "#35D9B8";

const IconContainer = styled.div.attrs( ( props : IconProps ) => {
    return {...props}
} )`
    width: ${ props => props.maxWidth ? props.maxWidth : '100%' };
    height: 100%;
    grid-area: icon;
    ${ props => !props.isExpanded ? 'display: none;' : '' }
    svg g{
        stroke: ${ props => props.color ? props.color : COLOR_DEFAULT }
    }
`;

export const Computer = ( props : IconProps ) : JSX.Element => {
  return (
    <IconContainer {...props}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 460 345"
        >
        <g
            strokeDasharray="none"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
        >
            <rect
            width="334.994"
            height="204.994"
            x="57.73"
            y="7.503"
            fill="#000"
            fillOpacity="0"
            fillRule="nonzero"
            strokeDashoffset="0"
            strokeLinejoin="miter"
            strokeWidth="15.005"
            paintOrder="markers stroke fill"
            ry="12.28"
            ></rect>
            <path
            fill="none"
            strokeLinejoin="round"
            strokeWidth="15.003"
            d="M55.608 227.502L7.501 292.498h444.998l-56.331-64.996z"
            ></path>
            <rect
            width="444.987"
            height="44.987"
            x="7.512"
            y="292.498"
            fill="#000"
            fillOpacity="0"
            fillRule="nonzero"
            strokeDashoffset="0"
            strokeLinejoin="miter"
            strokeWidth="15.013"
            paintOrder="markers stroke fill"
            ry="2.695"
            ></rect>
            <rect
            width="135.001"
            height="0.005"
            x="162.5"
            y="259.998"
            fill="#000"
            fillOpacity="1"
            fillRule="nonzero"
            strokeDashoffset="0"
            strokeLinejoin="round"
            strokeWidth="14.999"
            paintOrder="markers stroke fill"
            ry="0.002"
            ></rect>
            <g
            fill="none"
            strokeLinejoin="miter"
            strokeWidth="15"
            transform="translate(351.309 26.747)"
            >
            <g transform="matrix(-1 0 0 1 -194.554 9.408)">
                <path d="M-102.054 26.458l-82.836 47.826"></path>
                <path d="M-102.054 122.11l-82.836-47.826"></path>
            </g>
            <g>
                <g transform="translate(-57.61 9.408)">
                <path d="M-102.054 26.458l-82.836 47.826"></path>
                <path d="M-102.054 122.11l-82.836-47.826"></path>
                </g>
                <path d="M-114.645 23.692L-134.5 142.814"></path>
            </g>
            </g>
        </g>
        </svg>
    </IconContainer>
  );
};

export const PageDesign = ( props : IconProps ) : JSX.Element => {
    return(
        <IconContainer {...props}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
            viewBox="0 0 460 345"
            >
            <g
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
            >
              <rect
                width="445"
                height="335"
                x="7.5"
                y="7.5"
                fill="#000"
                fillOpacity="0"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="miter"
                strokeWidth="15"
                paintOrder="markers stroke fill"
                ry="20.068"
              ></rect>
              <rect
                width="444.996"
                height="64.996"
                x="7.502"
                y="7.502"
                fill="#000"
                fillOpacity="0"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="miter"
                strokeWidth="15.004"
                paintOrder="markers stroke fill"
                ry="3.894"
              ></rect>
              <g
                fill="#000"
                fillOpacity="0"
                fillRule="nonzero"
                strokeDashoffset="0"
                strokeLinejoin="miter"
                paintOrder="markers stroke fill"
                transform="translate(-6.868 8.492)"
              >
                <rect
                  width="85"
                  height="205.001"
                  x="58.211"
                  y="96.008"
                  strokeWidth="14.999"
                  ry="12.281"
                ></rect>
                <rect
                  width="272.314"
                  height="205"
                  x="143.211"
                  y="96.008"
                  strokeWidth="15"
                  ry="12.281"
                ></rect>
              </g>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeWidth="14.218"
                d="M37.178 39.306v0"
                paintOrder="stroke markers fill"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeWidth="14.218"
                d="M68.042 39.352v0"
                paintOrder="stroke markers fill"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeWidth="14.218"
                d="M97.385 39.118v0"
                paintOrder="stroke markers fill"
              ></path>
            </g>
            </svg>
        </IconContainer>
    );
};

export default IconContainer;