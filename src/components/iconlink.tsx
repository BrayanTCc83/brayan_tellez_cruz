import React from 'react';
import styled from "styled-components";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../icons/icon';

type IconLinkProps = React.PropsWithChildren & {
    icon: string,
    href: string,
};

const IconLinkStyled = styled.a`
    svg path {
        transition: fill 0.3s;
    }

    :hover svg path {
        fill: white;
    }
`;

const IconLink = (props:IconLinkProps) : JSX.Element => {
    return (
        <IconLinkStyled href={props.href}>
            {
                props.icon == 'linkedin' ? 
                    <LinkedinIcon id='linkedin' maxWidth='40px' isExpanded />
                : props.icon == 'youtube' ? 
                    <YoutubeIcon id='youtube' maxWidth='40px' isExpanded />
                :
                    <GithubIcon id='github' maxWidth='40px' isExpanded />
            }
        </IconLinkStyled>
    )
}

export default IconLink;