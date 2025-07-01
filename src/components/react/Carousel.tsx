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
        }
        
        const index = (target as HTMLButtonElement)?.getAttribute('aria-colindex');
        
        setPreviusImage(currentImage);
        setCurrentImage(Number(index));
        setTimeout(() => {
            setPreviusImage(-1);
        }, 510);
    }

    return <section
            id="carousel"
            className="carousel-tablist"
            aria-roledescription="carousel"
            aria-labelledby="carousel-label"
        >
        <h2 id="carousel-label" className="visually-hidden">
            Carrusel de imágenes del proyecto
        </h2>
        <div className="carousel-inner">
            <div className="carousel-controls">
            <div className="carousel-arrows-controls">
                <button
                    disabled={previusImage !== -1}
                    aria-colindex={
                        currentImage === 0 ? images.length - 1 : currentImage - 1
                    }
                    onClick={handleChangeImage}
                >
                    <PreviusArrow />
                </button>
                <button
                    disabled={previusImage !== -1}
                    aria-colindex={(currentImage + 1) % images.length}
                    onClick={handleChangeImage}
                >
                    <NextArrow />
                </button>
            </div>
            <div className="carousel-item-selector">
                {
                    images.map((_, idx) => (
                        <button
                            disabled={previusImage !== -1}
                            key={`carousel-controls-for-image-${idx}`}
                            aria-colindex={idx}
                            className={idx === currentImage ? "active" : ""}
                            onClick={handleChangeImage}
                            aria-label={`Ir a la imagen ${idx + 1}`}
                        />
                    ))
                }
            </div>
            </div>
            <div className="carousel-items" aria-live="off">
                {
                    images.map((image, idx) => (
                        <img
                            key={`carousel-image-${idx}-img`}
                            className={
                                idx === previusImage
                                ? "previus"
                                : idx === currentImage
                                ? "active"
                                : ""
                            }
                            src={image}
                            alt={`Imagen del carrusel ${idx + 1}`}
                            width={"100%"}
                            height={"100%"}
                        />
                    ))
                }
            </div>
        </div>
    </section>
};

export default Carousel;