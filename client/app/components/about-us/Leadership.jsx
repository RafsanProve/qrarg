import Image from "next/image"
import Link from "next/link";
import { Card, CardContent } from "../ui/card"

const experts = [
    {
        name: "Dr. Md Akhtaruzzaman",
        role: "Assist. Professor & Researcher (Robotics & Mechatronics)",
        bio: "Quantum physicist with 20+ years of experience in quantum computing and robotics integration.",
        image: "/images/Akhtaruzzaman.jpg",
    },
    {
        name: "Dr. Md Towfiqur Rahman",
        role: "Assistant Professor",
        bio: "Specializes in quantum algorithms and their applications in robotic control systems.",
        image: "/images/Dr_Towfiq.jpg",
    },
    {
        name: "Dr. Hosney Jahan",
        role: "Assistant Professor",
        bio: "Expert in autonomous robotic systems and human-robot interaction paradigms.",
        image: "/images/jahan.jpg",
    }
]
export default function Leadership() {
return (
    <section className="py-20 bg-white text-zinc-800 p-4 flex flex-col items-center justify-center h-full w-full mx-auto text-center md:mx-auto">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
            <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Experts</h2>
            <Image 
                src="/svgs/Underlines.svg" 
                alt="underline" 
                className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
                width={200} 
                height={20}
            />
            <p className="text-xl text-slate-700">
                Meet the experts guiding our research and organizational direction.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experts.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg border-gray-300 overflow-hidden">
                <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                <h3 className="text-zinc-800 text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-zinc-800 font-medium mb-2">{member.role}</p>
                {/* <p className="text-slate-600">{member.bio}</p> */}
                </CardContent>
            </Card>
            ))}
        </div>

        </div>
        
        <Link href="/expertise" className="border-solid border-2 border-zinc-800 transition duration-700 ease-in-out hover:scale-105 text-TEXT font-bold py-3 mt-16 md:py-4 px-6 md:px-8 text-lg md:text-xl w-40 md:w-44 lg:w-48 h-14 md:h-16 flex items-center justify-center gap-2">
            See More 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </Link>

    </section>
  );
}