import Image from "next/image"
import hero from "/public/images/hero.png"


export default function Hero() {
  return (
    <section style={{ backgroundImage: `url(${hero.src})` }} className="bg-repeat bg-cover text-TEXT h-auto min-h-[600px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full max-w-5xl text-center pb-10 mt-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome To <br />
        Quantum Robotics & Automation Research Group</h1>
        <p className="text-4xl font-light mb-8">
        The Dynamic Research Group Towards The Excellence
        </p>
      </div>
      <button className="border-solid border-2 border-TEXT transition duration-700 ease-in-out hover:backdrop-blur-md text-TEXT font-bold py-4 px-8 text-xl w-48 h-16">Learn More</button>
    </section>
  )
}