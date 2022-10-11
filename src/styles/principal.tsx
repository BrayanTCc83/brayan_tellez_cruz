import Style from 'styled-components';
import { IExpandibleComponent, IScrollExpandibleComponent } from '../models/interfaces/components';

export const ExpansibleHeader = Style.header.attrs( ( props : IExpandibleComponent ) => {
    return ( {...props} )
} )`
    header&#${ props => props.id ? props.id : 'header' } {
        position: sticky;
        top:0;
        left:0;
        display: inline-block;
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color : #232323;
        color: white;
        ${ props => !props.isExpanded ? `
            height: 10vh;
        ` : '' }
    }
`