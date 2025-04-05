import Image from "next/image"

export default function ImageCollage2(image){
return (
    <div className="relative w-full py-48 overflow-hidden">
        {/* Left section with header */}
        <div className="absolute top-0 left-0 w-full md:w-[55%] h-full bg-zinc-800 z-10 clip-path-backslash">
            {/* Backslash overlay */}
            <div className="absolute top-0 right-0 h-full w-24 md:w-32 bg-zinc-800 -skew-x-12 origin-top-right translate-x-1/2 z-0"></div>
            <div className="h-full flex flex-col justify-center px-8 md:px-16 mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl sm:pl-8 md:pl-12 lg:pl-16 mb-4 z-10">Join Our Research Community</h1>
                <p className="text-xl text-slate-300 max-w-4xl sm:pl-8 md:pl-12 lg:pl-16 mb-6 z-10">
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