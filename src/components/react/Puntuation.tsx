import type { JSX } from "astro/jsx-runtime";
import StarVoid from "./icons/StarVoid";
import StarHalf from "./icons/StarHalf";
import StarFull from "./icons/StarFull";

interface PuntuationProps {
    puntuation: number
}

const Puntuation = ({ puntuation }: PuntuationProps): JSX.Element => {
    return <div className="puntuation">
        {
            Array(Math.floor(puntuation/2)).fill('').map( () => <StarFull/> )
        }
        {
            Math.round(10 - puntuation) % 2 === 1 ? <StarHalf/> : null 
        }
        {
            Array(Math.floor(5 - puntuation/2)).fill('').map( () => <StarVoid/> )
        }
    </div>
}

export default Puntuation;