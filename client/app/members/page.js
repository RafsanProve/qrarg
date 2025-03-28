import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Search,
  Users,
} from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

import Hero from "../components/about-us/Hero"
import Navbar from "../components/Navbar"

import {Roboto_Condensed} from "next/font/google";

const roboto = Roboto_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});


const teamMembers = [
    // Leadership
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Founder & Director",
      bio: "Dr. Chen is a quantum physicist with over 20 years of experience in quantum computing and robotics integration. She founded QRARG in 2015 after a distinguished career at MIT and CERN.",
      image: "/placeholder.svg?height=400&width=400",
      department: "leadership",
      education: "Ph.D. in Quantum Physics, MIT",
      researchInterests: ["Quantum-classical interfaces", "Robotic control systems", "Quantum error correction"],
      publications: 45,
      email: "sarah.chen@qrarg.org",
      location: "Main Campus, Building A",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      role: "Chief Research Officer",
      bio: "Dr. Rodriguez specializes in quantum algorithms and their applications in robotic control systems. He leads the research strategy and oversees all scientific initiatives at QRARG.",
      image: "/placeholder.svg?height=400&width=400",
      department: "leadership",
      education: "Ph.D. in Computer Science, Stanford University",
      researchInterests: ["Quantum algorithms", "Robotic control", "Computational complexity"],
      publications: 38,
      email: "michael.rodriguez@qrarg.org",
      location: "Main Campus, Building A",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      role: "Head of Robotics",
      bio: "Dr. Patel is an expert in autonomous robotic systems and human-robot interaction paradigms. She leads the robotics division and oversees the development of next-generation robotic platforms.",
      image: "/placeholder.svg?height=400&width=400",
      department: "leadership",
      education: "Ph.D. in Robotics, Carnegie Mellon University",
      researchInterests: ["Autonomous systems", "Human-robot interaction", "Robotic perception"],
      publications: 32,
      email: "aisha.patel@qrarg.org",
      location: "Robotics Lab, Building B",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },

    // Senior Researchers
    {
      id: 4,
      name: "Prof. James Wilson",
      role: "Chief Scientist",
      bio: "Prof. Wilson is a leading researcher in quantum materials and their applications in sensing and computing. He oversees the scientific direction of QRARG's research programs.",
      image: "/placeholder.svg?height=400&width=400",
      department: "senior_researchers",
      education: "Ph.D. in Materials Science, Caltech",
      researchInterests: ["Quantum materials", "Quantum sensing", "Superconducting qubits"],
      publications: 65,
      email: "james.wilson@qrarg.org",
      location: "Quantum Materials Lab, Building C",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 5,
      name: "Dr. Elena Kuznetsova",
      role: "Head of AI & Automation",
      bio: "Dr. Kuznetsova leads pioneering work in machine learning algorithms for quantum-enhanced systems. She directs the AI and automation research group at QRARG.",
      image: "/placeholder.svg?height=400&width=400",
      department: "senior_researchers",
      education: "Ph.D. in Artificial Intelligence, ETH Zurich",
      researchInterests: ["Quantum machine learning", "Automated decision systems", "Neural networks"],
      publications: 29,
      email: "elena.kuznetsova@qrarg.org",
      location: "AI Lab, Building D",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 6,
      name: "Dr. David Okonkwo",
      role: "Director of Partnerships",
      bio: "Dr. Okonkwo facilitates collaborations between QRARG and industry/academic partners worldwide. He also conducts research on quantum networking and distributed quantum systems.",
      image: "/placeholder.svg?height=400&width=400",
      department: "senior_researchers",
      education: "Ph.D. in Physics, University of Tokyo",
      researchInterests: ["Quantum networks", "Distributed quantum computing", "Industry applications"],
      publications: 27,
      email: "david.okonkwo@qrarg.org",
      location: "Main Campus, Building A",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },

    // Research Scientists
    {
      id: 7,
      name: "Dr. Maya Hernandez",
      role: "Research Scientist",
      bio: "Dr. Hernandez specializes in quantum error correction and fault-tolerant quantum computing with applications to robotic systems operating in noisy environments.",
      image: "/placeholder.svg?height=400&width=400",
      department: "research_scientists",
      education: "Ph.D. in Quantum Information, University of Waterloo",
      researchInterests: ["Quantum error correction", "Fault-tolerant computing", "Noise mitigation"],
      publications: 18,
      email: "maya.hernandez@qrarg.org",
      location: "Quantum Computing Lab, Building C",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 8,
      name: "Dr. Hiroshi Tanaka",
      role: "Research Scientist",
      bio: "Dr. Tanaka works on quantum sensing technologies for robotic perception, developing novel approaches to enhance the sensitivity and resolution of robotic sensor systems.",
      image: "/placeholder.svg?height=400&width=400",
      department: "research_scientists",
      education: "Ph.D. in Applied Physics, University of Tokyo",
      researchInterests: ["Quantum sensing", "Robotic perception", "Sensor fusion"],
      publications: 22,
      email: "hiroshi.tanaka@qrarg.org",
      location: "Sensing Lab, Building B",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 9,
      name: "Dr. Sophia Nkosi",
      role: "Research Scientist",
      bio: "Dr. Nkosi researches quantum machine learning algorithms for robotic decision-making, focusing on reinforcement learning approaches enhanced by quantum computing.",
      image: "/placeholder.svg?height=400&width=400",
      department: "research_scientists",
      education: "Ph.D. in Computer Science, University of Cape Town",
      researchInterests: ["Quantum machine learning", "Reinforcement learning", "Decision systems"],
      publications: 15,
      email: "sophia.nkosi@qrarg.org",
      location: "AI Lab, Building D",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 10,
      name: "Dr. Raj Patel",
      role: "Research Scientist",
      bio: "Dr. Patel focuses on quantum-classical interfaces for robotic systems, developing hardware and software solutions to bridge quantum processors with classical robotic controllers.",
      image: "/placeholder.svg?height=400&width=400",
      department: "research_scientists",
      education: "Ph.D. in Electrical Engineering, UC Berkeley",
      researchInterests: ["Quantum-classical interfaces", "Hardware design", "System integration"],
      publications: 19,
      email: "raj.patel@qrarg.org",
      location: "Integration Lab, Building B",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },

    // Postdoctoral Researchers
    {
      id: 11,
      name: "Dr. Emma Johnson",
      role: "Postdoctoral Researcher",
      bio: "Dr. Johnson investigates quantum algorithms for robotic path planning and optimization, with a focus on applications in complex and dynamic environments.",
      image: "/placeholder.svg?height=400&width=400",
      department: "postdocs",
      education: "Ph.D. in Computer Science, University of Oxford",
      researchInterests: ["Path planning", "Quantum optimization", "Dynamic environments"],
      publications: 8,
      email: "emma.johnson@qrarg.org",
      location: "Algorithms Lab, Building D",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 12,
      name: "Dr. Carlos Mendoza",
      role: "Postdoctoral Researcher",
      bio: "Dr. Mendoza works on quantum simulation for materials discovery, focusing on identifying novel materials with properties optimized for robotic applications.",
      image: "/placeholder.svg?height=400&width=400",
      department: "postdocs",
      education: "Ph.D. in Materials Science, Universidad Nacional Autónoma de México",
      researchInterests: ["Quantum simulation", "Materials discovery", "Computational design"],
      publications: 6,
      email: "carlos.mendoza@qrarg.org",
      location: "Materials Lab, Building C",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
  ]
export default function MembersPage() {
  // Sample team members data
return (
  <main className={roboto.className}>
    <Navbar />
      <Hero 
      title = "Our Team"
      description = "Meet the researchers, scientists, and staff behind our groundbreaking work in quantum robotics."
      />

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-800" />
              <Input placeholder="Search team members..." className="pl-10 text-zinc-800 border-gray-600" />
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="bg-zinc-800 flex items-center">
                Department <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-zinc-800 flex items-center">
                Research Area <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Content */}
      <section className="py-12 bg-slate-50 flex-1">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full  text-zinc-800">
            <TabsList className="mb-8 ">
              <TabsTrigger value="all">All Members</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="senior_researchers">Senior Researchers</TabsTrigger>
              <TabsTrigger value="research_scientists">Research Scientists</TabsTrigger>
              <TabsTrigger value="postdocs">Postdoctoral Researchers</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="leadership">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers
                  .filter((m) => m.department === "leadership")
                  .map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="senior_researchers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers
                  .filter((m) => m.department === "senior_researchers")
                  .map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="research_scientists">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers
                  .filter((m) => m.department === "research_scientists")
                  .map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="postdocs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers
                  .filter((m) => m.department === "postdocs")
                  .map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Showing 12 of 50+ team members</p>
            <Button>View All Team Members</Button>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-slate-700">
                Were always looking for talented researchers and staff to join our mission of advancing quantum
                robotics and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Research Positions</h3>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Join our research team and work on cutting-edge projects in quantum computing, robotics, and
                    automation. We offer positions for postdoctoral researchers, research scientists, and senior
                    researchers.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Access to state-of-the-art facilities and equipment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Collaboration with leading experts in the field</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Opportunities to publish in top journals and conferences</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Button>View Research Openings</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Staff & Support Positions</h3>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Our operations, administrative, and technical staff play a crucial role in supporting our research
                    mission. Join our team in areas such as lab management, IT, administration, and outreach.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Competitive compensation and benefits</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Professional development opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Work in a dynamic, innovative environment</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Button>View Staff Openings</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-700 mb-4">
                Dont see a position that matches your skills? Were always interested in hearing from talented
                individuals.
              </p>
              <Button variant="outline">Submit General Application</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Researchers Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Visiting Researchers Program</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-700 mb-8">
              We welcome visiting researchers from academic institutions and industry partners to collaborate with our
              team on short-term projects and knowledge exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Learn About the Program</Button>
              <Button variant="outline">Apply as a Visiting Researcher</Button>
            </div>
          </div>
        </div>
      </section>
  </main>
  )
}

function MemberCard({ member }) {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-square relative">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>

        <p className="text-sm text-slate-600 mb-4 line-clamp-3">{member.bio}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-start">
            <BookOpen className="h-4 w-4 text-slate-400 mt-0.5 mr-2" />
            <span>{member.education}</span>
          </div>
          <div className="flex items-start">
            <Mail className="h-4 w-4 text-slate-400 mt-0.5 mr-2" />
            <a href={`mailto:${member.email}`} className="text-primary hover:underline">
              {member.email}
            </a>
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 text-slate-400 mt-0.5 mr-2" />
            <span>{member.location}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
          <div className="flex space-x-2">
            <Link href={member.socialLinks.linkedin} className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href={member.socialLinks.github} className="text-slate-400 hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <Link href={`/members/${member.id}`} className="text-primary text-sm font-medium flex items-center">
            View Profile <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

