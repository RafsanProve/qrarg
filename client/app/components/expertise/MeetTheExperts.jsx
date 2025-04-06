import Image from "next/image"

export default function MeetTheExperts() {
  return (
    <div className="bg-white text-zinc-800 p-4 flex flex-col items-center justify-center h-full w-full text-center pt-10 mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-4">Our Experts</h1>
      <div>
        <Image 
            src="/svgs/Underlines.svg" 
            alt="underline" 
            className="-mt-2 mb-4 sm:mb-6 w-40 sm:w-48 md:w-56 lg:w-80"
            width={200} 
            height={20}
        />
      </div>

      <p className="text-base sm:text-xl md:text-2xl px-4 sm:px-8 md:px-18 mb-4 leading-relaxed">
        At the heart of our research community are passionate individuals who thrive on <b>Innovation</b>,<br className="hidden md:block" />
        <b>Collaboration</b>, and the <b>Pursuit of knowledge</b>. We believe that every idea has the <b>Potential</b> to make <br className="hidden md:block" />
        a difference, and our team is dedicated to turning those ideas into reality. Meet the people who <br className="hidden md:block" />
        are passionate about advancing research and fostering a community of curiosity and collaboration.
      </p>
    </div>
  )
}