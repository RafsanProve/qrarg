import Image from "next/image"

export default function HomeCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white text-zinc-800 rounded-3xl border-2 shadow-2xl flex flex-col items-left justify-start h-[560px] w-80 mx-auto pb-10 mt-20 sm:mx-8 md:mx-auto">
      <Image src={imageUrl} alt={title} className="w-80 h-64 rounded-t-3xl shadow-lg bg-cover" width={320} height={256} />
      <h1 className="text-lg line-clamp-3 text-left w-full font-bold sm:text-lg md:text-2xl mb-4 mt-4 px-4 sm:px-8 md:px-18">{title}</h1>
      {/* <h1 className="text-lg line-clamp-3 self-start font-bold sm:text-lg md:text-2xl mb-4 mt-4 px-4 sm:px-8 md:px-18 ">{title}</h1> */}
      <p className="text-base text-neutral-500 sm:text-base md:text-lg px-4 sm:px-8 md:px-18 mb-4 leading-relaxed text-left">{description}</p>
    </div>
  )
}