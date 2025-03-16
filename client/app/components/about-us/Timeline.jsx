import { Award, BookOpen, Calendar, Globe, Lightbulb, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

const all = [
    {
        year: "2015",
        title: "Foundation",
        description:
        "QRARG was established by a team of researchers from leading universities and industry labs.",
        icon: <Calendar className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2017",
        title: "First Major Publication",
        description:
        "Published groundbreaking research on quantum-enhanced robotic control systems in Nature Robotics.",
        icon: <BookOpen className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2019",
        title: "New Research Facility",
        description:
        "Opened our state-of-the-art research facility with dedicated quantum computing and robotics labs.",
        icon: <Globe className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2021",
        title: "Industry Partnership Program",
        description:
        "Launched collaborative research program with leading technology companies and manufacturers.",
        icon: <Users className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2023",
        title: "Quantum Robotics Prototype",
        description:
        "Unveiled the first working prototype of a quantum-enhanced robotic system for precision manufacturing.",
        icon: <Award className="h-6 w-6 text-zinc-800" />,
    },
];

const research = [
    {
        year: "2017",
        title: "First Major Publication",
        description:
        "Published groundbreaking research on quantum-enhanced robotic control systems in Nature Robotics.",
        icon: <BookOpen className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2020",
        title: "Quantum Algorithm Breakthrough",
        description:
        "Developed novel quantum algorithms for real-time robotic path planning with exponential speedup.",
        icon: <Lightbulb className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2023",
        title: "Quantum Robotics Prototype",
        description:
        "Unveiled the first working prototype of a quantum-enhanced robotic system for precision manufacturing.",
        icon: <Award className="h-6 w-6 text-zinc-800" />,
    },
];

const organization = [
    {
        year: "2015",
        title: "Foundation",
        description:
        "QRARG was established by a team of researchers from leading universities and industry labs.",
        icon: <Calendar className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2019",
        title: "New Research Facility",
        description:
        "Opened our state-of-the-art research facility with dedicated quantum computing and robotics labs.",
        icon: <Globe className="h-6 w-6 text-zinc-800" />,
    },
    {
        year: "2021",
        title: "Industry Partnership Program",
        description:
        "Launched collaborative research program with leading technology companies and manufacturers.",
        icon: <Users className="h-6 w-6 text-zinc-800" />,
    },
];


export default function Timeline() {
return (
    <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-zinc-800 text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-700">Key milestones in our research and organizational development.</p>
            </div>

            <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="all" className="w-full text-zinc-800">
                <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All Milestones</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="organization">Organization</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                <div className="space-y-8">
                    {all.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-zinc-800/15 flex items-center justify-center">
                            {milestone.icon}
                        </div>
                        {index < 4 && <div className="w-0.5 h-16 bg-zinc-800 mt-2"></div>}
                        </div>
                        <div className="flex-1 pt-1.5">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium bg-zinc-800/15 text-zinc-800 px-2 py-0.5 rounded">
                            {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold">{milestone.title}</h3>
                        </div>
                        <p className="text-slate-600">{milestone.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </TabsContent>

                <TabsContent value="research" className="mt-6">
                <div className="space-y-8">
                    {research.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-zinc-800/15 flex items-center justify-center">
                            {milestone.icon}
                        </div>
                        {index < 2 && <div className="w-0.5 h-16 bg-zinc-800 mt-2"></div>}
                        </div>
                        <div className="flex-1 pt-1.5">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium bg-zinc-800/15 text-zinc-800 px-2 py-0.5 rounded">
                            {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold">{milestone.title}</h3>
                        </div>
                        <p className="text-slate-600">{milestone.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </TabsContent>

                <TabsContent value="organization" className="mt-6">
                <div className="space-y-8">
                    {organization.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-zinc-800/15 flex items-center justify-center">
                            {milestone.icon}
                        </div>
                        {index < 2 && <div className="w-0.5 h-16 bg-zinc-800 mt-2"></div>}
                        </div>
                        <div className="flex-1 pt-1.5">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium bg-zinc-800/15 text-zinc-800 px-2 py-0.5 rounded">
                            {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold">{milestone.title}</h3>
                        </div>
                        <p className="text-slate-600">{milestone.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </TabsContent>
            </Tabs>
            </div>
        </div>
    </section>
  );
}