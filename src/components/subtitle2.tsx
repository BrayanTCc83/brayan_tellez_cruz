import React from 'react'
import styled from 'styled-components'

const Subtitle2Style = styled.h3`
    font-size: 40px;
    font-family: 'Century Gothic';
    color: white;
    font-weight: normal;
    grid-area: subtitle2;
    margin: 10px 0;
    padding: 0;
`;

const Subtitle2 = ( props : React.PropsWithChildren ) : JSX.Element => {
    return <Subtitle2Style {...props}/>
};

export default Subtitle2;