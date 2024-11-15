import HomeCard from "./HomeCard";

export default function Researches() {
    return (
    <section className="bg-white text-zinc-800 p-4 shadow-lg flex flex-col items-center justify-center h-full mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-4">Researches</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <HomeCard title={"Research 1"} description={"Description 1"} imageUrl={"/images/research1.png"} />
            <HomeCard title={"Research 1"} description={"Description 1"} imageUrl={"/images/product1.png"} />
            <HomeCard title={"Research 1"} description={"Description 1"} imageUrl={"/images/research1.png"} />
        </div>
        
    </section>
)
}