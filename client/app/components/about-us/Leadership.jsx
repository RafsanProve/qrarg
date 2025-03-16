import Image from "next/image"
import { Card, CardContent } from "../ui/card"
export default function Leadership() {
return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-zinc-800 text-3xl font-bold mb-4">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-700">
            Meet the experts guiding our research and organizational direction.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
            {
                name: "Dr. Sarah Chen",
                role: "Founder & Director",
                bio: "Quantum physicist with 20+ years of experience in quantum computing and robotics integration.",
                image: "/placeholder.svg?height=300&width=300",
            },
            {
                name: "Dr. Michael Rodriguez",
                role: "Chief Research Officer",
                bio: "Specializes in quantum algorithms and their applications in robotic control systems.",
                image: "/placeholder.svg?height=300&width=300",
            },
            {
                name: "Dr. Aisha Patel",
                role: "Head of Robotics",
                bio: "Expert in autonomous robotic systems and human-robot interaction paradigms.",
                image: "/placeholder.svg?height=300&width=300",
            },
            {
                name: "Prof. James Wilson",
                role: "Chief Scientist",
                bio: "Leading researcher in quantum materials and their applications in sensing and computing.",
                image: "/placeholder.svg?height=300&width=300",
            },
            {
                name: "Dr. Elena Kuznetsova",
                role: "Head of AI & Automation",
                bio: "Pioneering work in machine learning algorithms for quantum-enhanced systems.",
                image: "/placeholder.svg?height=300&width=300",
            },
            {
                name: "Dr. David Okonkwo",
                role: "Director of Partnerships",
                bio: "Facilitates collaborations between QRARG and industry/academic partners worldwide.",
                image: "/placeholder.svg?height=300&width=300",
            },
            ].map((member, index) => (
            <Card key={index} className="bg-white shadow-md border-none overflow-hidden">
                <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                <h3 className="text-zinc-800 text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-zinc-800 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </section>
  );
}