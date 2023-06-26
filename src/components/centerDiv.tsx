import React from 'react';
import styled from "styled-components";

type CenterDivProps = React.PropsWithChildren & {
    
};

const CenterDivStyled = styled.div.attrs((props:CenterDivProps) => {})`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

const CenterDiv = (props:CenterDivProps) : JSX.Element => {
    return <CenterDivStyled {...props}/>
}

export default CenterDiv;