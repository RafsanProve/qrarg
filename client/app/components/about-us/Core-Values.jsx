import Image from "next/image"
import { Award, Globe, Lightbulb, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const moto = [
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
]
export default function CoreValue() {
  return (
    <section className="bg-white text-zinc-800 p-4 flex flex-col items-center justify-center h-full w-full mx-auto text-center py-20 sm:mx-8 md:mx-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
            <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>            
              <Image 
                  src="/svgs/Underlines.svg" 
                  alt="underline" 
                  className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
                  width={200} 
                  height={20}
              />
            <p className="text-xl text-slate-700">
              These principles guide our research, collaborations, and organizational culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto pb-8">
            {moto.map((value, index) => (
              <Card key={index} className="bg-gray-100 shadow-lg border-gray-200 transition duration-700 ease-in-out hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-zinc-800/20 flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-zinc-800 text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-zinc-700">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
}