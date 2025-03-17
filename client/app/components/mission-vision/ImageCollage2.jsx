import Image from "next/image"

export default function ImageCollage2(image){
return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Left section with header */}
        <div className="absolute top-0 left-0 w-full md:w-[55%] h-full bg-zinc-800 z-10 clip-path-backslash">
            {/* Backslash overlay */}
            <div className="absolute top-0 right-0 h-full w-24 md:w-32 bg-zinc-800 -skew-x-12 origin-top-right translate-x-1/2 z-20"></div>
            <div className="h-full flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Join Our Research Community</h1>
            <p className="text-white text-lg md:text-xl max-w-xl">
                Find the Innovative minds brewing the advancement of the future.
            </p>
            </div>

            
        </div>

        {/* Right section with image */}
        <div className="absolute top-0 right-0 w-full md:w-[50%] h-full">
            <Image
            src= "/images/research02.jpg"// "/images/hero-mission-vision.jpg" // {image} // "/placeholder.svg?height=800&width=600"
            alt="Research collaboration"
            fill
            className="object-cover"
            priority
            />
        </div>
    </div>
    )
}