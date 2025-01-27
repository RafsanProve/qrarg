import Image from "next/image"

export default function MeetTheExperts() {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-2xl mx-4 sm:mx-8 md:mx-auto mt-12 sm:mt-16 md:mt-20 p-3 sm:p-4 pb-8 sm:pb-10 rounded-3xl max-w-6xl h-full text-center text-zinc-800">
      <h1 className="mt-3 sm:mt-4 mb-3 sm:mb-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Meet the Experts</h1>
      <div>
        <Image 
            src="/svgs/Underlines.svg" 
            alt="underline" 
            className="-mt-2 mb-4 sm:mb-6 w-40 sm:w-48 md:w-56 lg:w-80"
            width={200} 
            height={20}
        />
      </div>

      <p className="mb-4 px-3 sm:px-6 md:px-12 lg:px-18 text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed">
        At the heart of our research community are passionate individuals who thrive on <b>Innovation</b>,
        <b>Collaboration</b>, and the <b>Pursuit of knowledge</b>. We believe that every idea has the <b>Potential</b> to make
        a difference, and our team is dedicated to turning those ideas into reality. Meet the people who
        are passionate about advancing research and fostering a community of curiosity and collaboration.
      </p>
    </div>
  )
}