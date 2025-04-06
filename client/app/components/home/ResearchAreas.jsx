import Image from "next/image"

import { ChevronRight, Atom, Cpu, Brain } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
export default function ResearchAreas() {
return (
        // {/* Research Areas Section */}
    <section className="py-16 bg-white text-zinc-800">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Research Areas</h2>
            <Image 
                src="/svgs/Underlines.svg" 
                alt="underline" 
                className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
                width={200} 
                height={20}
            />
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <span className="text-base sm:text-base md:text-lg text-slate-700">
                Our multidisciplinary team explores various cutting-edge fields at the intersection of quantum physics,
                robotics, and automation.
            </span>
            </div>

            <Tabs defaultValue="quantum" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="quantum">Quantum Computing</TabsTrigger>
                <TabsTrigger value="robotics">Robotics</TabsTrigger>
                <TabsTrigger value="ai">AI & Automation</TabsTrigger>
            </TabsList>
            <TabsContent value="quantum" className="mt-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <h3 className="font-bold text-lg sm:text-lg md:text-2xl mb-4">Quantum Computing</h3>
                    <p className="text-slate-700 text-base sm:text-base md:text-lg mb-4">
                    We are developing next-generation quantum algorithms, quantum error correction techniques, and
                    quantum hardware interfaces that will revolutionize computing capabilities.
                    </p>
                    <ul className="space-y-2">
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Quantum algorithm development</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Quantum error correction</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Quantum-classical interfaces</span>
                    </li>
                    </ul>
                </div>
                <div className="md:w-1/2 bg-slate-200 rounded-lg p-6 flex items-center justify-center">
                    <Atom className="h-32 w-32 text-primary/80" />
                </div>
                </div>
            </TabsContent>
            <TabsContent value="robotics" className="mt-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <h3 className="font-bold text-lg sm:text-lg md:text-2xl mb-4">Robotics</h3>
                    <p className="text-slate-700 text-base sm:text-base md:text-lg mb-4">
                    Our robotics research focuses on developing autonomous systems, advanced control mechanisms, and
                    human-robot interaction paradigms for various applications.
                    </p>
                    <ul className="space-y-2">
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Autonomous navigation systems</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Robotic manipulation and control</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Human-robot collaboration</span>
                    </li>
                    </ul>
                </div>
                <div className="md:w-1/2 bg-slate-200 rounded-lg p-6 flex items-center justify-center">
                    <Cpu className="h-32 w-32 text-primary/80" />
                </div>
                </div>
            </TabsContent>
            <TabsContent value="ai" className="mt-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <h3 className="font-bold text-lg sm:text-lg md:text-2xl mb-4">AI & Automation</h3>
                    <p className="text-slate-700 text-base sm:text-base md:text-lg mb-4">
                    We integrate advanced AI techniques with automation systems to create intelligent solutions for
                    complex problems across various domains.
                    </p>
                    <ul className="space-y-2">
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Machine learning for robotics</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Automated decision-making systems</span>
                    </li>
                    <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Computer vision and perception</span>
                    </li>
                    </ul>
                </div>
                <div className="md:w-1/2 bg-slate-200 rounded-lg p-6 flex items-center justify-center">
                    <Brain className="h-32 w-32 text-primary/80" />
                </div>
                </div>
            </TabsContent>
            </Tabs>
        </div>
    </section>
    );
}