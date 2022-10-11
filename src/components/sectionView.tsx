import React from 'react';
import styled from 'styled-components';

type SectionViewProps = React.PropsWithChildren & {
    side: 'right' | 'left',
    id?: string
};

const SectionViewStyled = styled.section.attrs( (props : SectionViewProps) => props )`
    display: grid;
    grid-template: min-content / repeat(4, calc(25% - 7.5px));
    justify-items: center;
    margin: 20px 0;
    grid-gap: 10px;
    ${ props => props.side === 'right' ? `
            grid-template-areas:
                "icon icon title title"
                "icon icon subtitle2 subtitle2"
                "icon icon info info"
                "content content content content";`
        : props.side === 'left' ? `
            grid-template-areas:
                "title title icon icon"
                "subtitle2 subtitle2 icon icon"
                "info info icon icon"
                "content content content content";` 
        : ''
    }
`;

const SectionView = ( props : SectionViewProps ) : JSX.Element => {
    return(
        <SectionViewStyled {...props}/>
    );
};
 
export default SectionView;