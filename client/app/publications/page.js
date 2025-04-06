import Navbar from "../components/Navbar"
import Hero from "../components/about-us/Hero"
import PublicationCard from "../components/publications/PublicationCard"
import Guide from "../components/publications/Guide"
import Footer from "../components/Footer"

import publications from "../data/publications.json"

import {Roboto_Condensed} from "next/font/google";

const roboto = Roboto_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export default function PublicationsPage() {
  return (
    <div className={`${roboto.className} flex flex-col min-h-screen`}>
        <Navbar />
        <div className="bg-zinc-800 w-full h-16"></div>
        <Hero
        title={"Our Publications"}
        description={"Explore our research papers, conference proceedings, and other scholarly works."}
        tags={1}
        />

        <div className="bg-white p-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications
                // .filter((p) => p.featured)
                .map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
                ))}
        </div>

        <Guide />
        <Footer />
    </div>
  )
}

