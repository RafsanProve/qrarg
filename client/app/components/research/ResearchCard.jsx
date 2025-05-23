import Image from "next/image"
import Link from "next/link"
import Tag from "./Tag"

export default function ResearchCard({ title, authors, tags, description, imageUrl, link }) {
  return (
    <div className="bg-white text-zinc-800 rounded-xl border-2 border-gray-300 flex flex-col items-left justify-start h-[600px] w-11/12 mx-auto pb-10 mt-12 sm:mx-8 md:mx-auto">
      <Image src={imageUrl} alt={title} className="w-full h-64 rounded-t-xl shadow-lg bg-cover" width={320} height={256} />
      <h1 className="line-clamp-2 text-left w-full font-bold text-base sm:text-base md:text-xl mb-4 mt-4 px-4 sm:px-8 md:px-18">{title}</h1>
      
      {/* Authors section */}
      {/* <div className="flex flex-row items-center justify-start px-4 sm:px-8 md:px-18 mb-2">
        <p className="text-sm text-gray-600 font-bold italic line-clamp-1">
          {authors ? authors.join(', ') : 'Anonymous'}
        </p>
      </div> */}

      {/* Authors section */}
      <div className="flex flex-row items-center justify-start px-4 sm:px-8 md:px-18 mb-2 group relative">
        <p className="text-sm text-gray-600 font-bold italic line-clamp-1 cursor-pointer">
          {authors ? authors.join(', ') : 'Anonymous'}
          <span className="invisible group-hover:visible absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-10">
            {authors ? authors.join(', ') : 'Anonymous'}
          </span>
        </p>
      </div>

      <div className="flex flex-row line-clamp-1 items-center justify-start gap-2 px-4 sm:px-8 md:px-18 mb-2">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
      {
      (link) 
          ?
        (<p className="line-clamp-4 text-neutral-500 text-sm sm:text-sm md:text-base px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
          : 
        (<p className="line-clamp-5 text-neutral-500 text-sm sm:text-sm md:text-base px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
      }
      {link && (
        <Link href={link} target="_blank" className="bg-zinc-800 text-white text-sm w-28 h-8 transition duration-700 ease-in-out hover:scale-105 hover:drop-shadow-xl flex items-center justify-center rounded-[4px] mt-auto mx-8 self-start">
          Read More...
        </Link>
      )}
    </div>
  )
}