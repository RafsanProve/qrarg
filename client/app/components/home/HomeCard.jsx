import Image from "next/image"

export default function HomeCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white text-zinc-800 rounded-3xl border-2 shadow-2xl flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto">
      <Image src={imageUrl} alt={title} className="w-80 h-64 shadow-lg bg-cover" width={320} height={256} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-4">{title}</h1>
      <p className="text-base sm:text-xl md:text-2xl px-4 sm:px-8 md:px-18 mb-4 leading-relaxed">{description}</p>
    </div>
  )
}