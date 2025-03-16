import { Award, Globe, Lightbulb, Users } from "lucide-react"

import { Card, CardContent } from "../ui/card"
export default function CoreValue() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-zinc-800 text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-700">
              These principles guide our research, collaborations, and organizational culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Lightbulb className="h-8 w-8 text-zinc-800" />,
                title: "Innovation",
                description:
                  "We embrace bold ideas and creative approaches to solve complex problems at the intersection of quantum physics and robotics.",
              },
              {
                icon: <Users className="h-8 w-8 text-zinc-800" />,
                title: "Collaboration",
                description:
                  "We believe in the power of diverse perspectives and interdisciplinary teamwork to achieve breakthrough discoveries.",
              },
              {
                icon: <Award className="h-8 w-8 text-zinc-800" />,
                title: "Excellence",
                description:
                  "We maintain the highest standards in our research methodology, publications, and technological developments.",
              },
              {
                icon: <Globe className="h-8 w-8 text-zinc-800" />,
                title: "Impact",
                description:
                  "We focus on research that addresses meaningful challenges and creates positive change in the world.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-zinc-800/15 flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-zinc-800 text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
}