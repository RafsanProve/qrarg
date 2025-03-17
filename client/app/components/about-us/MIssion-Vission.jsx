import Image from "next/image"
import { ArrowRight, Lightbulb, Target } from "lucide-react"
import { Card, CardContent } from "../ui/card"
export default function MissionVission() {
return (
    <section className="py-16 bg-white text-zinc-800 rounded-3xl p-4 shadow-2xl flex flex-col items-center justify-center h-full max-w-7xl mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
            <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
            <Image   
                src="/svgs/Underlines.svg" 
                alt="underline" 
                className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
                width={200} 
                height={20}
            />        
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg border-none">
            <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800/15 flex items-center justify-center mb-4">
                    <Target className=" h-8 w-8 text-zinc-800" />
                </div>
                <h3 className="text-zinc-800 text-2xl font-bold mb-2">Our Mission</h3>
                </div>
                <p className="text-slate-700">
                To advance the frontiers of quantum robotics and automation through innovative research, collaborative
                partnerships, and the development of transformative technologies that address complex global
                challenges.
                </p>
                <ul className="mt-6 space-y-3 text-zinc-800">
                <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-zinc-800 shrink-0 mt-0.5 mr-2" />
                    <span>Conduct cutting-edge research in quantum computing and robotics</span>
                </li>
                <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-zinc-800 shrink-0 mt-0.5 mr-2" />
                    <span>Develop practical applications that solve real-world problems</span>
                </li>
                <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-zinc-800 shrink-0 mt-0.5 mr-2" />
                    <span>Foster collaboration across disciplines and organizations</span>
                </li>
                </ul>
            </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none">
            <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800/15 flex items-center justify-center mb-4">
                    <Lightbulb className="h-8 w-8 text-zinc-800" />
                </div>
                <h3 className="text-zinc-800 text-2xl font-bold mb-2">Our Vision</h3>
                </div>
                <p className="text-slate-700">
                To be the global leader in quantum robotics research, creating a future where quantum-enhanced
                automation systems transform industries, improve human lives, and help solve humanity greatest
                challenges.
                </p>
                <ul className="mt-6 space-y-3 text-zinc-800">
                <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-zinc-800 shrink-0 mt-0.5 mr-2" />
                    <span>Pioneer breakthroughs in quantum-classical interfaces</span>
                </li>
                <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-zinc-800 shrink-0 mt-0.5 mr-2" />
                    <span>Build a diverse community of researchers and innovators</span>
                </li>
                <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-zinc-800 shrink-0 mt-0.5 mr-2" />
                    <span>Drive the adoption of quantum technologies across industries</span>
                </li>
                </ul>
            </CardContent>
            </Card>
        </div>
        </div>
    </section>
  );
}