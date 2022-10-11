import styled from 'styled-components';

const ContentContainer = styled.section.attrs( (props:{height:string, pxVerticalMargin:number}) => props )`   
    position: relative;
    display: flex;
    align-items: center;
    min-height: 200px;
    max-height: 80vh;
    width : 100%;
    height: ${props => props.height? props.height : 'fit-content'};
    background-color: #232323;
    padding: ${ props => props.pxVerticalMargin ? props.pxVerticalMargin+'px' : 0 };
    overflow: scroll;
    box-shadow: 0px 2px 5px #35D9B8;
    grid-area: content;
`;

export default ContentContainer;