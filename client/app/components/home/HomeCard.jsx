import Image from "next/image"
import Link from "next/link"

export default function HomeCard({ title, description, imageUrl, link }) {
  return (
    <div className="bg-white text-zinc-800 rounded-3xl border-2 shadow-xl flex flex-col items-left justify-start h-[560px] w-96 mx-auto pb-10 mt-20 sm:mx-8 md:mx-auto">
      <Image src={imageUrl} alt={title} className="w-96 h-64 rounded-t-3xl shadow-lg bg-cover" width={320} height={256} />
      <h2 className="line-clamp-2 text-left w-full font-bold text-lg sm:text-lg md:text-2xl mb-4 mt-4 px-4 sm:px-8 md:px-18">{title}</h2>
      {
      (link) 
          ?
        (<p className="line-clamp-4 text-neutral-500 text-base sm:text-base md:text-lg px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
          : 
        (<p className="line-clamp-5 text-neutral-500 text-base sm:text-base md:text-lg px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
      }
      {link && (
        <Link href={link} target="_blank" className="bg-zinc-800 text-white w-32 h-10 transition duration-700 ease-in-out hover:scale-105 hover:drop-shadow-xl flex items-center justify-center rounded-[4px] mt-auto mx-8 self-start">
          Read More
          <Image src="/svgs/arrow.svg" alt="arrow" className="w-4 h-4 ml-2" width={20} height={20} />
        </Link>
      )}

    </div>
  )
}