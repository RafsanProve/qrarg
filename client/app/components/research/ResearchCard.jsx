import Image from "next/image"
import Link from "next/link"
import Tag from "./Tag"

export default function HomeCard({ title, description, imageUrl, link }) {
  return (
    <div className="bg-white text-zinc-800 rounded-xl border-2 border-zinc-800 flex flex-col items-left justify-start h-[560px] w-11/12 mx-auto pb-10 mt-12 sm:mx-8 md:mx-auto">
      <Image src={imageUrl} alt={title} className="w-full h-64 rounded-t-3xl shadow-lg bg-cover" width={320} height={256} />
      <h1 className="line-clamp-2 text-left w-full font-bold text-base sm:text-base md:text-xl mb-4 mt-4 px-4 sm:px-8 md:px-18">{title}</h1>
      <div className="flex flex-row line-clamp-1 items-center justify-start gap-2 px-4 sm:px-8 md:px-18 mb-2">
        <Tag name="Research" />
        <Tag name="Research" />
        <Tag name="Research" />
      </div>
      {
      (link) 
          ?
        (<p className="line-clamp-4 text-neutral-500 text-sm sm:text-sm md:text-base px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
          : 
        (<p className="line-clamp-5 text-neutral-500 text-sm sm:text-sm md:text-base px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
      }
      {link && (
        <Link href={link} target="_blank" className=" text-indigo-500 font-bold w-32 h-10 transition duration-700 ease-in-out hover:text-blue-500 hover:scale-105 hover:drop-shadow-xl flex items-center justify-center rounded-[4px] mt-auto mx-4 self-start">
          Read More...
        </Link>
      )}

    </div>
  )
}