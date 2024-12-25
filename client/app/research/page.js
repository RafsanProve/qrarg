import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResearchCard from "../components/research/ResearchCard";
import {Roboto_Condensed} from "next/font/google";
import FilterBox from "../components/research/FilterBox";
import SearchBar from "../components/research/SearchBar";
import InfoSection from "../components/research/InfoSection";
import data from "../data/research_paper.json";

const roboto = Roboto_Condensed({
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      style: ["normal", "italic"],
      subsets: ["latin"],
});  

export default function ResearchesPage() {
    return (
      <main className={roboto.className}>
        <Navbar />
        <div className="bg-zinc-800 w-full h-16"></div>
        <InfoSection />
        <div className="flex mx-8">
          {/* Fixed FilterBox */}
          <div className="sticky top-20 w-1/5 h-screen overflow-y-auto">
            <FilterBox />
          </div>
        
          {/* Research Cards Grid */}
          <div className="ml-6 flex-1">
          <SearchBar />
            <div className="grid grid-cols-3">
              {data.map((research) => (
                <ResearchCard
                  key={research.id}
                  title={research.title}
                  authors={research.authors}
                  description={research.description}
                  imageUrl={research.imageUrl}
                  link={research.link}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
}