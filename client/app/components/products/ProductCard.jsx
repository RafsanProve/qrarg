import Image from "next/image"
import Link from "next/link"
import Tag from "./Tag"
import VisitButton from "./VisitButton"

export default function ProductCard({ title, authors, tags, description, imageUrl, link }) {
  return (
    <div className="bg-white text-zinc-800 rounded-xl border-2 border-zinc-800 flex flex-col items-left justify-start h-[550px] w-11/12 mx-auto pb-10 mt-12 sm:mx-8 md:mx-auto">
      <Image src={imageUrl} alt={title} className="w-full h-64 rounded-t-xl shadow-lg bg-cover" width={320} height={256} />
      <h1 className="line-clamp-2 text-left w-full font-bold text-base sm:text-base md:text-xl mb-4 mt-4 px-4 sm:px-8 md:px-18">{title}</h1>

      {/* Authors section */}
      {/* <div className="flex flex-row items-center justify-start px-4 sm:px-8 md:px-18 mb-2 group relative">
        <p className="text-sm text-gray-600 font-bold italic line-clamp-1 cursor-pointer">
          {authors ? authors.join(', ') : 'Anonymous'}
          <span className="invisible group-hover:visible absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-10">
            {authors ? authors.join(', ') : 'Anonymous'}
          </span>
        </p>
      </div> */}

      {/* <div className="flex flex-row line-clamp-1 items-center justify-start gap-2 px-4 sm:px-8 md:px-18 mb-2">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div> */}
      {
      (link) 
          ?
        (<p className="line-clamp-4 text-neutral-500 text-base sm:text-base md:text-lg px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
          : 
        (<p className="line-clamp-5 text-neutral-500 text-base sm:text-base md:text-lg px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>)
      }
      {link && (
        // <Link href={link} target="_blank" className="text-indigo-500 font-bold w-32 h-10 transition duration-700 ease-in-out hover:text-blue-500 hover:scale-105 hover:drop-shadow-xl flex items-center justify-center rounded-[4px] mt-auto mx-4 self-start">
        //   Visit
        // </Link>
        <div className="flex flex-cols-4 items-start justify-start px-4 sm:px-8 md:px-18 mt-auto">
        <VisitButton link={link} />
        </div>
      )}
    </div>
  )
}