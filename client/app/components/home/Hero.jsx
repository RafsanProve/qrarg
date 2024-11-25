'use client'
import Link from "next/link"
import hero from "/public/images/hero.png"
import { useEffect, useState } from "react"
import Carousel from "./Carousel"
import Image from "next/image"
import EmblaCarousel from "./EmblaCarousel"

const images = [
  hero.src,
  "/images/eye-tracking-hero.png", 
  "/images/forcasting-hero.png", 
  "/images/fuzzy-hero.png",
  "/images/photometric-hero2.png",
]



export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setNextImageIndex((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <EmblaCarousel />
    // <div className="overflow-hidden relative">
    //   {/* Static section for height reference */}
    //   <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]"></div>
      
    //   <div className="absolute top-0 left-0 w-full h-full">
    //     <section 
    //       style={{ 
    //         backgroundImage: `url(${images[currentImageIndex]})`,
    //         transform: `translateX(${isTransitioning ? '-100%' : '0'})`,
    //         transition: 'transform 0.5s ease-in-out',
    //         backgroundPosition: 'center'
    //       }} 
    //       className="absolute w-full bg-repeat bg-cover shadow-2xl text-TEXT h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
    //       <div className="flex flex-col items-center justify-center h-full max-w-5xl text-center">
    //         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
    //           Welcome To <br />
    //           Quantum Robotics & Automation Research Group
    //         </h1>
    //         <p className="text-xl md:text-2xl lg:text-4xl font-light mb-6 md:mb-7 lg:mb-8">
    //           The Dynamic Research Group Towards The Excellence
    //         </p>
    //         <Link href="#" className="border-solid border-2 border-TEXT transition duration-700 ease-in-out hover:backdrop-blur-md hover:scale-105 text-TEXT font-bold text-lg md:text-xl w-40 md:w-44 lg:w-48 h-14 md:h-16 flex items-center justify-center">
    //           Learn More
    //         </Link>
    //       </div>
    //     </section>

    //     <section 
    //       style={{ 
    //         backgroundImage: `url(${images[nextImageIndex]})`,
    //         transform: `translateX(${isTransitioning ? '0' : '100%'})`,
    //         transition: 'transform 0.5s ease-in-out',
    //         backgroundPosition: 'center'
    //       }} 
    //       className="absolute w-full bg-repeat bg-cover shadow-2xl text-TEXT h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
    //       <div className="flex flex-col items-center justify-center h-full max-w-5xl text-center">
    //         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
    //           Welcome To <br />
    //           Quantum Robotics & Automation Research Group
    //         </h1>
    //         <p className="text-xl md:text-2xl lg:text-4xl font-light mb-6 md:mb-7 lg:mb-8">
    //           The Dynamic Research Group Towards The Excellence
    //         </p>
    //         <Link href="#" className="border-solid border-2 border-TEXT transition duration-700 ease-in-out hover:backdrop-blur-md hover:scale-105 text-TEXT font-bold text-lg md:text-xl w-40 md:w-44 lg:w-48 h-14 md:h-16 flex items-center justify-center">
    //           Learn More
    //         </Link>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  )
}
