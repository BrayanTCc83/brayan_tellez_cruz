import React, { useState } from "react";
import NextArrow from "./icons/NextArrow";
import PreviusArrow from "./icons/PreviusArrow";

interface CarouselProps {
    images: string[]
}

const Carousel = ({ images }: CarouselProps): React.JSX.Element => {
    const [ currentImage, setCurrentImage ] = useState<number>(0);
    const [ previusImage, setPreviusImage ] = useState<number>(-1);

    const handleChangeImage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        let target:HTMLElement|null = e.target as HTMLElement;
        while(target && (target as HTMLElement).tagName !== 'BUTTON') {
            target = (target as HTMLElement).parentElement;
            console.log(target?.tagName)
        }
        
        const index = (target as HTMLButtonElement)?.getAttribute('aria-colindex');
        
        setPreviusImage(currentImage);
        setCurrentImage(Number(index));
        setTimeout(() => {
            setPreviusImage(-1);
        }, 510);
    }

    return <section id="carousel" className="carousel-tablist" aria-roledescription="carousel" aria-label="Carrusel de imagenes del proyecto.">
        <div className="carousel-inner">
            <div className="carousel-controls">
                <div className="carousel-arrows-controls">
                    <button disabled={previusImage !== -1} aria-colindex={currentImage === 0 ? (images.length - 1) : (currentImage - 1) } onClick={handleChangeImage}><PreviusArrow/></button>
                    <button disabled={previusImage !== -1} aria-colindex={(currentImage + 1) % images.length} onClick={handleChangeImage}><NextArrow/></button>
                </div>
                <div className="carousel-item-selector">
                    {
                        images.map(
                            (_, idx) => <button disabled={previusImage !== -1}
                                key={`carousel-controls-for-image-${idx}`}
                                aria-colindex={idx}
                                className={idx === currentImage ? 'active' : ''}
                                onClick={handleChangeImage}
                            ></button>
                        )
                    }
                </div>
            </div>
            <div className="carousel-items" aria-live="off">
                {
                    images.map( (image, idx) =>
                        <img
                            key={`carousel-image-${idx}-img`}
                            className={idx === previusImage ? 'previus' : idx === currentImage ? 'active' : ''}
                            src={image}
                            alt={`Imagen '${image}' no encontrada.`}
                        />
                    )
                }
            </div>
        </div>
    </section>
};

export default Carousel;