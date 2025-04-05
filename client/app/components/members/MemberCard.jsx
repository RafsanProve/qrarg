import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react"

import { Card, CardContent } from "../../components/ui/card"


export default function MemberCard({ member }) {
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
    );
}