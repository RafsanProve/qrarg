import Hero from "../components/about-us/Hero"
import Navbar from "../components/Navbar"
import JoinTeam from "../components/members/JoinTeam"
import VisitingResearch from "../components/members/VisitingResearch"
import MemberCard from "../components/members/MemberCard"
import Footer from "../components/Footer"
import SearchFilter from "../components/members/SearchFilter"

import TeamMembers from "../data/team_member.json"

import {Roboto_Condensed} from "next/font/google";

const roboto = Roboto_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});


export default function MembersPage() {
  // Sample team members data
return (
  <main className={roboto.className}>
    <Navbar />
    <div className="bg-zinc-800 w-full h-16"></div>
      <Hero 
      title = "Our Team"
      description = "Meet the researchers, scientists, and staff behind our groundbreaking work in quantum robotics."
      tags={1}
      />

      <section className="p-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TeamMembers
            // .filter((m) => m.department === "leadership")
            .map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
        </div>
      </section>

      <JoinTeam />
      {/* <VisitingResearch /> */}
      <Footer />
  </main>
  );
}