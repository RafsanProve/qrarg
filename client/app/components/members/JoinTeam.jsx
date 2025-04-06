import Image from 'next/image'
import { ArrowRight, BookOpen, Users} from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"

export default function JoinTeam() {
  return (
    // {/* Join Our Team Section */}
    <section className="py-16 bg-white text-zinc-800">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <Image 
              src="/svgs/Underlines.svg" 
              alt="underline" 
              className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
              width={200} 
              height={20}
          />
          <p className="text-lg text-slate-700">
            We are always looking for talented researchers and staff to join our mission of advancing quantum
            robotics and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800/15 flex items-center justify-center mb-4">
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
                <Button className="border border-zinc-800">View Research Openings</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800/15 flex items-center justify-center mb-4">
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
                <Button className="border border-zinc-800">View Staff Openings</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-700 mb-4">
            Do not see a position that matches your skills? Were always interested in hearing from talented
            individuals.
          </p>
          <Button className="bg-zinc-800 text-white" variant="outline">Submit General Application</Button>
        </div>
      </div>
    </div>
  </section>
  )
}