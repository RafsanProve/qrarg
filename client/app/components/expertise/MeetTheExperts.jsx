import Image from "next/image"

export default function MeetTheExperts() {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-2xl mx-auto sm:mx-8 md:mx-auto mt-20 p-4 pb-10 rounded-3xl max-w-6xl h-full text-center text-zinc-800">
      <h1 className="mt-4 mb-4 font-bold text-2xl sm:text-3xl md:text-4xl">Meet the Experts</h1>
      <div>
        <Image 
            src="/svgs/Underlines.svg" 
            alt="underline" 
            className="-mt-2 mb-6 w-56 md:w-64 lg:w-80"
            width={200} 
            height={20}
        />
        </div>

      <p className="mb-4 px-4 sm:px-8 md:px-18 text-base sm:text-xl md:text-2xl leading-relaxed">
        At the heart of our research community are passionate individuals who thrive on <b>Innovation</b>,
        <b>Collaboration</b>, and the <b>Pursuit of knowledge</b>. We believe that every idea has the <b>Potential</b> to make
        a difference, and our team is dedicated to turning those ideas into reality. Meet the people who
        are passionate about advancing research and fostering a community of curiosity and collaboration.
      </p>
    </div>
  )
}