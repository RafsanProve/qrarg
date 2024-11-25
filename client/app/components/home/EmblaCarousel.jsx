import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
    PrevButton,
    NextButton,
} from './EmblaCarouselArrowButtons'
import Image from 'next/image'
import Link from 'next/link'

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
        <PrevButton className= "absolute flex items-center justify-center text-black transition duration-700 ease-in-out  hover:text-white hover:scale-105 top-[200px] md:top-[250px] lg:top-[300px] left-0 w-16 h-16 mx-1 z-10" onClick={scrollPrev} />
        <div className="embla__viewport mx-auto mt-auto h-[400px] md:h-[500px] lg:h-[600px] w-full border border-gray-500 text-black " ref={emblaRef}>
        
            <div className="embla__container h-full">
                {images.map((image, index) => (
                    <div className="embla__slide flex items-center justify-center" key={index}>
                        <Image src={image} alt="Image" className="w-full h-full object-cover" width={1000} height={1000} />
                        {index === 0 && (
                            <div className="absolute flex flex-col items-center justify-center h-full max-w-5xl text-center text-zinc-200">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                                Welcome To <br />
                                Quantum Robotics & Automation Research Group
                                </h1>
                                <p className="text-xl md:text-2xl lg:text-4xl font-light mb-6 md:mb-7 lg:mb-8">
                                The Dynamic Research Group Towards The Excellence
                                </p>
                                <Link href="#" className="border-solid border-2 border-TEXT transition duration-700 ease-in-out hover:backdrop-blur-md hover:scale-105 text-TEXT font-bold text-lg md:text-xl w-40 md:w-44 lg:w-48 h-14 md:h-16 flex items-center justify-center">
                                Learn More
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        
        </div>
        <NextButton className= "absolute flex items-center justify-center text-black transition duration-700 ease-in-out  hover:text-white hover:scale-105 top-[200px] md:top-[250px] lg:top-[300px] right-0 w-16 h-16 mx-1 z-10" onClick={scrollNext}/>
    </div>
    )
}
