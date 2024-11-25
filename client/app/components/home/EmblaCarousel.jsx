import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
    PrevButton,
    NextButton,
} from './EmblaCarouselArrowButtons'
import Image from 'next/image'

const images = [
    "/images/hero.png",
    "/images/eye-tracking-hero.png", 
    "/images/forcasting-hero.png", 
    "/images/fuzzy-hero.png",
    "/images/photometric-hero2.png",
]

export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({ delay: 3000 })])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    return (
    <div className=''>
        {/* <button className="embla__prev text-black" onClick={scrollPrev}>
            ←
        </button> */}
        
        <PrevButton className= "absolute flex items-center justify-center text-black transition duration-700 ease-in-out  hover:text-white hover:scale-105 top-[200px] md:top-[250px] lg:top-[300px] left-0 w-16 h-16 mx-1 z-10" onClick={scrollPrev} />
        <div className="embla__viewport mx-auto mt-auto h-[400px] md:h-[500px] lg:h-[600px] w-full border border-gray-500 text-black " ref={emblaRef}>
        
            <div className="embla__container h-full">
                {images.map((image, index) => (
                    <div className="embla__slide flex items-center justify-center" key={index}>
                        <Image src={image} alt="Image" className="w-full h-full object-cover" width={1000} height={1000} />
                    </div>
                ))}
            </div>
        
        </div>

        {/* <button className="embla__next text-black" onClick={scrollNext}>
            →
        </button> */}

        <NextButton className= "absolute flex items-center justify-center text-black transition duration-700 ease-in-out  hover:text-white hover:scale-105 top-[200px] md:top-[250px] lg:top-[300px] right-0 w-16 h-16 mx-1 z-10" onClick={scrollNext}/>
    </div>
    )
}
