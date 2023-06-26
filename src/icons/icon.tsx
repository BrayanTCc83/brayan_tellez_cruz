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

export const LinkedinIcon = ( props : IconProps ) : JSX.Element => {
  return (
    <IconContainer {...props}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512"
        fill={props.color?props.color:COLOR_DEFAULT} 
      >
        <path 
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        />
      </svg>
    </IconContainer>
  );
};

export const YoutubeIcon = ( props : IconProps ) : JSX.Element => {
  return (
    <IconContainer {...props}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 576 512"
        fill={props.color?props.color:COLOR_DEFAULT} 
      >
        <path 
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
        />
      </svg>
    </IconContainer>
  );
};

export const GithubIcon = ( props : IconProps ) : JSX.Element => {
  return (
    <IconContainer {...props}>
      <svg 
        aria-hidden="true" 
        focusable="false" 
        data-prefix="fab" 
        data-icon="github" 
        className="svg-inline--fa fa-github fa-w-16" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 496 512"
      >
        <path 
          fill={props.color?props.color:COLOR_DEFAULT} 
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        >
        </path>
      </svg>
    </IconContainer>
  );
};

export default IconContainer;