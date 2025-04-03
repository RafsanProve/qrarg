import Image from "next/image";
import { Globe, Lightbulb, Users } from "lucide-react"

export default function Mission() {
return (
    // {/* Mission Statement Section */}
    <section className="py-16 bg-white text-zinc-800">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <Image 
                src="/svgs/Underlines.svg" 
                alt="underline" 
                className="-mt-1 mb-6 w-36 md:w-40 lg:w-44"
                width={100} 
                height={20}
            />
            <p className="text-xl text-slate-700 mb-6 font-medium italic">
                &quot;To advance the frontiers of quantum robotics and automation through innovative research, collaborative
                partnerships, and the development of transformative technologies that address complex global
                challenges.&quot;
            </p>
            <p className="text-slate-700 mb-6">
                We aim to cultivate a dynamic research community that is globally recognized and that bridges disciplines, fostering collaboration among experts in quantum mechanics, robotics, AI, automation, and beyond. 
                Our platform serves as a hub where ideas converge, innovations emerge, and groundbreaking research translates into real-world solutions. 
                We believe that multidisciplinary collaboration drives discovery, deepens understanding, and fuels impactful advancements. By facilitating knowledge sharing, expert discussions, and joint projects, we strive to accelerate scientific progress and technological innovation.
            </p>
            <div className="space-y-4">
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-800/20 flex items-center justify-center shrink-0 mr-4">
                    <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Pioneering Research</h3>
                    <p className="text-slate-600">
                    Conducting groundbreaking research in quantum computing, robotics, and their integration.
                    </p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-800/20 flex items-center justify-center shrink-0 mr-4">
                    <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Collaborative Approach</h3>
                    <p className="text-slate-600">
                    Fostering partnerships across academia, industry, and government to accelerate innovation.
                    </p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-800/20 flex items-center justify-center shrink-0 mr-4">
                    <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Global Impact</h3>
                    <p className="text-slate-600">
                    Developing solutions that address significant challenges facing humanity and our planet.
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="relative">
            <div className="aspect-square bg-slate-200 rounded-lg overflow-hidden">
                <Image
                src="/placeholder.svg?height=500&width=500"
                alt="QRARG Mission"
                width={500}
                height={500}
                className="object-cover"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-zinc-800/20 rounded-lg -z-10"></div>
            </div>
        </div>
        </div>
    </section>
);
}