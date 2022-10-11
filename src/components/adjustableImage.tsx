import React, {} from 'react';
import styled from 'styled-components';
import { IExpandibleComponent } from '../models/interfaces/components';

type AdjustableImageProps = React.PropsWithChildren & IExpandibleComponent & {
    src : string
}

const AdjustableContent = styled.img.attrs( ( props: IExpandibleComponent ) => {
    return {
        isExpanded : props.isExpanded,
        maxWidth : props.maxWidth
    }
} )`
    position: relative;
    grid-area: image;
    width: 100%;
    transition: top 0.5s ease, left 0.5s ease, width 0.5s ease;
    ${ props => !props.isExpanded ? `
        display: none;
    `: '' }
`

const AdjustableImage = ( props : AdjustableImageProps ) : JSX.Element => {
    return (
        <AdjustableContent {...props} />
    );
};

export default AdjustableImage;