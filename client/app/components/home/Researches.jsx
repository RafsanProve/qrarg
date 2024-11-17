import Image from "next/image";
import HomeCard from "./HomeCard";
import Link from "next/link";

export default function Researches() {
    return (
    <section className="bg-white text-zinc-800 p-4 shadow-lg flex flex-col items-center justify-center h-full w-full mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-4">Researches</h1>
        <div>
        <Image 
            src="/svgs/Underlines.svg" 
            alt="underline" 
            className="-mt-2 w-48 md:w-56 lg:w-64"
            width={200} 
            height={20}
        />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <HomeCard title={"IoT-based AI-integrated device for farmers: A recommendation System for crop cultivation"} description={"Description 1"} imageUrl={"/images/research1.png"} />
            <HomeCard title={"Research 1"} description={"Description 1"} imageUrl={"/images/product1.png"} />
            <HomeCard title={"IoT-based AI-integrated device for farmers: A recommendation System for crop cultivation"} description={"Description 1"} imageUrl={"/images/research1.png"}/>
        </div>
        <Link href="#" className="border-solid border-2 border-zinc-800 transition duration-700 ease-in-out hover:scale-105 text-TEXT font-bold py-3 mt-16 md:py-4 px-6 md:px-8 text-lg md:text-xl w-40 md:w-44 lg:w-48 h-14 md:h-16 flex items-center justify-center gap-2">
            See More 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </Link>
    </section>
    )
}