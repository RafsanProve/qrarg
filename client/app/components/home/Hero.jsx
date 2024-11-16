import hero from "/public/images/hero.png"

export default function Hero() {
  return (
    <section style={{ backgroundImage: `url(${hero.src})` }} className="bg-repeat bg-cover text-TEXT w-auto h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center h-full max-w-5xl text-center pb-6 md:pb-8 lg:pb-10 mt-16 md:mt-18 lg:mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          Welcome To <br />
          Quantum Robotics & Automation Research Group
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl font-light mb-6 md:mb-7 lg:mb-8">
          The Dynamic Research Group Towards The Excellence
        </p>
      </div>
      <button className="border-solid border-2 border-TEXT transition duration-700 ease-in-out hover:backdrop-blur-md text-TEXT font-bold py-3 md:py-4 px-6 md:px-8 text-lg md:text-xl w-40 md:w-44 lg:w-48 h-14 md:h-16">
        Learn More
      </button>
    </section>
  )
}