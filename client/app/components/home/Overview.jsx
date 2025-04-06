import Image from "next/image"

export default function Overview() {
  return (
    <div className="bg-white text-zinc-800 p-4 shadow-2xl flex flex-col items-center justify-center h-full w-full text-center py-10 mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-4">Overview</h1>
      <div>
        <Image 
            src="/svgs/Underlines.svg" 
            alt="underline" 
            className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
            width={200} 
            height={20}
        />
      </div>

      <p className="text-base sm:text-xl md:text-2xl px-4 sm:px-8 md:px-18 mb-4 leading-relaxed">
        <b>Quantum Robotics & Automation Research Group(QRARG)</b> is dedicated to <br className="hidden md:block" />
        conduct world class and <b> Innovative Research</b>,
        leaping towards the High Tech Future. <br className="hidden md:block" />
        Here, Imagination are endless and Every ideas and possibilities are warmly Welcomed. <br className="hidden md:block" />
        Explore all of our <b>Researches, Products</b> and other <b>Resources</b> to the fullest of your desire.
      </p>
    </div>
  )
}